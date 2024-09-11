import { useMutation, useQueryClient } from '@tanstack/react-query'
import { usePendingGoals } from '../../app/hooks/usePendingGoals'
import { goalsCompletionService } from '../../app/services/goalsCompletion'

export function usePendingGoalsComponent() {
  const { pendingGoals } = usePendingGoals()
  const queryClient = useQueryClient()

  const handleCompleteGoal = async (goalId: string) => {
    await goalsCompletionService.create({ goalId })
    queryClient.invalidateQueries({ queryKey: ['get-summary'] })
    queryClient.invalidateQueries({ queryKey: ['get-pending-goals'] })
  }

  const { mutateAsync: CompleteGoal } = useMutation({
    mutationFn: handleCompleteGoal,
  })

  return { pendingGoals, CompleteGoal }
}
