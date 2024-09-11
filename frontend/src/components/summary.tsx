import { CheckCircle2, Plus } from 'lucide-react'
import { InOrbitIcon } from './in-orbit-icon'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { useSummary } from '../app/hooks/useSummary'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-BR'
import { PendingGoals } from './pending-goals'

dayjs.locale(ptBR)

export function Summary() {
  const { summaryData } = useSummary()
  console.log(summaryData)

  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM')

  const completedPercentage = Math.round(
    (summaryData!.completed * 100) / summaryData!.total
  )

  return (
    <section className="py-10 max-w-[480px] mx-auto flex flex-col gap-6">
      <header className="flex items-center">
        <InOrbitIcon classname="size-6" />
        <span className="text-lg tracking-tight font-semibold leading-tight ml-3 capitalize">
          {firstDayOfWeek} - {lastDayOfWeek}
        </span>
        <DialogTrigger asChild>
          <Button className="ml-auto" size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </header>

      <div className="flex flex-col gap-3">
        <Progress value={summaryData?.completed} max={summaryData?.total}>
          <ProgressIndicator
            style={{
              width: `${completedPercentage}%`,
              transition: 'all .5s ease',
            }}
          />
        </Progress>

        <div className="text-xs text-zinc-400 flex justify-between items-center leading-relaxed">
          <span>
            Você completou{' '}
            <span className="text-zinc-100">{summaryData?.completed}</span> de{' '}
            <span className="text-zinc-100">{summaryData?.total}</span> metas
            nessa semana.
          </span>
          <span>{completedPercentage}%</span>
        </div>
      </div>
      <Separator />

      <PendingGoals />

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>
        {!summaryData?.goalsPerDay && (
          <p className="text-zinc-400 text-sm leading-relaxed">
            Você ainda não completou nenhuma meta essa semana.
          </p>
        )}

        {summaryData?.goalsPerDay &&
          Object.entries(summaryData?.goalsPerDay).map(([date, goals]) => {
            const weekDay = dayjs(date).format('dddd')
            const formattedDate = dayjs(date).format('D [ de ] MMMM')
            return (
              <div key={date} className="flex flex-col gap-4">
                <h3 className="font-medium">
                  <span className="capitalize">{weekDay} </span>
                  <span className="text-zinc-400 text-xs leading-snug font-normal">
                    ({formattedDate})
                  </span>
                </h3>

                <ul className="flex flex-col gap-3">
                  {goals.map(goal => {
                    const formattedHour = dayjs(goal.completedAt).format(
                      'HH:mm'
                    )
                    return (
                      <li key={goal.id} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-pink-500" />
                        <span className="text-sm leading-relaxed text-zinc-400">
                          Você completou “
                          <span className="text-zinc-100">{goal.title}</span>”
                          às{' '}
                          <span className="text-zinc-100">
                            {formattedHour}h
                          </span>
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
      </div>
    </section>
  )
}
