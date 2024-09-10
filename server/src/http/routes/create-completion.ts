import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createGoalCompletion } from '../../functions/create-goal-completion'

export const createCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/completions',
    {
      schema: {
        body: z.object({
          goalId: z.string().min(1),
        }),
      },
    },
    async request => {
      const { goalId } = request.body
      await createGoalCompletion({ goalId })
    }
  )
}
