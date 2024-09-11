import { Dialog } from './components/ui/dialog'
import { EmptyState } from './components/empty-state'
import { Summary } from './components/summary'
import { useSummary } from './app/hooks/useSummary'
import { CreateGoal } from './components/create-goal'

export function App() {
  const { summaryData } = useSummary()
  const hasSummary = summaryData && summaryData?.total > 0
  return (
    <Dialog>
      {hasSummary ? <Summary /> : <EmptyState />}

      <CreateGoal />
    </Dialog>
  )
}
