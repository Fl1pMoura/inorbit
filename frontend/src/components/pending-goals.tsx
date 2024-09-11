import { Plus } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'
import { usePendingGoals } from '../app/hooks/usePendingGoals'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { goalsCompletionService } from '../app/services/goalsCompletion'

export function PendingGoals() {
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

  return (
    <div className="flex gap-2 items-center flex-wrap">
      {pendingGoals.map(pendingGoal => {
        const goalCompletedThisWeek =
          pendingGoal.completionCount === pendingGoal.desiredWeeklyFrequency
        return (
          <OutlineButton
            key={pendingGoal.id}
            disabled={goalCompletedThisWeek}
            onClick={() => {
              if (!goalCompletedThisWeek) {
                CompleteGoal(pendingGoal.id)
              }
            }}
          >
            <Plus className="size-4 text-zinc-600" />
            {pendingGoal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
