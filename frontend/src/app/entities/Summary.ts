interface Goal {
  id: string
  title: string
  completedAt: string // ou Date, dependendo de como você vai usar esse campo
}

interface GoalsPerDay {
  [date: string]: Goal[]
}

export interface Summary {
  completed: number
  total: number
  goalsPerDay: GoalsPerDay
}
