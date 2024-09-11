import type { PendingGoals } from '../../entities/PendingGoals'
import { httpClient } from '../httpClient'

export async function getAll(): Promise<PendingGoals[]> {
  const { data } = await httpClient.get<{ pendingGoals: PendingGoals[] }>(
    '/pending-goals'
  )

  return data.pendingGoals
}
