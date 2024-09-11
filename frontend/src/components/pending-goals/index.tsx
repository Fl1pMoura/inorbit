import { Plus } from 'lucide-react'
import { OutlineButton } from '../ui/outline-button'
import { usePendingGoalsComponent } from './usePendingGoalsComponent'

export function PendingGoals() {
  const { CompleteGoal, pendingGoals } = usePendingGoalsComponent()

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
