import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { goalsService } from '../../app/services/goals'

const createGoalForm = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja realizar'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

type CreateGoalForm = z.infer<typeof createGoalForm>

export function useCreateGoal() {
  const { register, control, handleSubmit, formState } =
    useForm<CreateGoalForm>({
      resolver: zodResolver(createGoalForm),
    })

  const queryClient = useQueryClient()

  async function handleCreateGoal(data: CreateGoalForm) {
    await goalsService.create(data)

    queryClient.invalidateQueries({ queryKey: ['get-summary'] })
    queryClient.invalidateQueries({ queryKey: ['get-pending-goals'] })
  }

  return { register, control, handleSubmit, formState, handleCreateGoal }
}
