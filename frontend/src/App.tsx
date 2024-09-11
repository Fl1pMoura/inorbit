import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { EmptyState } from './components/empty-state'
import { Summary } from './components/summary'

export function App() {
  return (
    <Dialog>
      {/* <EmptyState /> */}
      <Summary />
      <CreateGoal />
    </Dialog>
  )
}
