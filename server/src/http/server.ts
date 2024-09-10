import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { createCompletionRoute } from './routes/create-completion'
import { createGoalRoute } from './routes/create-goal'
import { getPendingGoalsRoute } from './routes/get-pending-goals'

const app = fastify().withTypeProvider<ZodTypeProvider>()

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createCompletionRoute)
app.register(createGoalRoute)
app.register(getPendingGoalsRoute)

app.listen({ port: 3333 }).then(() => console.log('Server runnig'))
