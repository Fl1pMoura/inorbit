import { db } from '../db'
import { goals } from '../db/schema'

interface createGoalParams {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal({
  desiredWeeklyFrequency,
  title,
}: createGoalParams) {
  const results = await db
    .insert(goals)
    .values({ title, desiredWeeklyFrequency })
    .returning()

  const goal = results[0]

  return { goal }
}
