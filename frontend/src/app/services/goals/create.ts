import { httpClient } from '../httpClient'

export interface CreateGoal {
  title: string
  desiredWeeklyFrequency: number
}

export async function create({ title, desiredWeeklyFrequency }: CreateGoal) {
  const { data } = await httpClient.post('/goals', {
    title,
    desiredWeeklyFrequency,
  })

  return data
}
