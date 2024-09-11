import { useQuery } from '@tanstack/react-query'
import type { PendingGoals } from '../entities/PendingGoals'
import { pendingGoalsService } from '../services/pendingGoalsService'

export function usePendingGoals() {
  const { data, isFetching: isFetchingPendingGoals } = useQuery<PendingGoals[]>(
    {
      queryKey: ['get-pending-goals'],
      queryFn: pendingGoalsService.getAll,
      staleTime: 60 * 1000,
    }
  )
  return { pendingGoals: data ?? [], isFetchingPendingGoals }
}
