import type { Summary } from '../../entities/Summary'
import { httpClient } from '../httpClient'

export async function getAll(): Promise<Summary> {
  const { data } = await httpClient.get<{ summary: Summary }>('/summary')

  return data.summary
}
