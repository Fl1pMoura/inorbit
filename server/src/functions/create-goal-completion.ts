import { db } from '../db'
import { goalCompletions, goals } from '../db/schema'
import { and, count, eq, gte, lte } from 'drizzle-orm'
import dayjs from 'dayjs'

interface createGoalCompletionParams {
  goalId: string
}

export async function createGoalCompletion({
  goalId,
}: createGoalCompletionParams) {
  const firstDayOfWeek = dayjs().startOf('week').toDate()
  const lastDayOfWeek = dayjs().endOf('week').toDate()

  const goalsCompletionsCount = db.$with('goals_completions_count').as(
    db
      .select({
        completionCount: count(goalCompletions.goalId).as('completionCount'),
        goalId: goalCompletions.goalId,
      })
      .from(goalCompletions)
      .where(
        and(
          gte(goalCompletions.createdAt, firstDayOfWeek),
          lte(goalCompletions.createdAt, lastDayOfWeek),
          eq(goalCompletions.goalId, goalId)
        )
      )
      .groupBy(goalCompletions.goalId)
  )

  const result = await db
    .with(goalsCompletionsCount)
    .select({
      desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
      completionCount: goalsCompletionsCount.completionCount,
    })
    .from(goals)
    .leftJoin(goalsCompletionsCount, eq(goalsCompletionsCount.goalId, goals.id))
    .where(eq(goals.id, goalId))
    .limit(1)

  const { completionCount, desiredWeeklyFrequency } = result[0]

  if (completionCount >= desiredWeeklyFrequency) {
    throw new Error('Goal already completed this week!')
  }

  const insertResult = await db
    .insert(goalCompletions)
    .values({ goalId })
    .returning()

  const goalCompletion = insertResult[0]

  return { goalCompletion }
}
