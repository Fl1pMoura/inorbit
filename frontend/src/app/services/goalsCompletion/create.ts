import { httpClient } from '../httpClient'

export interface CreateGoalCompletion {
  goalId: string
}

export async function create({ goalId }: CreateGoalCompletion) {
  const { data } = await httpClient.post('/completions', {
    goalId,
  })

  return data
}
