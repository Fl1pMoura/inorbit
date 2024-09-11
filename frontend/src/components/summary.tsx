import { CheckCircle2, Plus } from 'lucide-react'
import { InOrbitIcon } from './in-orbit-icon'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'

export function Summary() {
  return (
    <section className="py-10 max-w-[480px] mx-auto flex flex-col gap-6">
      <header className="flex items-center">
        <InOrbitIcon classname="size-6" />
        <span className="text-lg tracking-tight font-semibold leading-tight ml-3">
          05 a 12 de Agosto
        </span>
        <DialogTrigger asChild>
          <Button className="ml-auto" size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </header>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: '50%' }} />
        </Progress>

        <div className="text-xs text-zinc-400 flex justify-between items-center leading-relaxed">
          <span>
            Você completou <span className="text-zinc-100">8</span> de{' '}
            <span className="text-zinc-100">15</span> metas nessa semana.
          </span>
          <span>58%</span>
        </div>
      </div>
      <Separator />

      <div className="flex gap-2 items-center flex-wrap">
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Meditar
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Nadar
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Praticar Exercicio
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Praticar Exercicio
        </OutlineButton>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Domingo{' '}
            <span className="text-zinc-400 text-xs leading-snug font-normal">
              (10 de Agosto)
            </span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm leading-relaxed text-zinc-400">
                Você completou “
                <span className="text-zinc-100">Praticar exercício</span>” às
                19:49h
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm leading-relaxed text-zinc-400">
                Você completou “
                <span className="text-zinc-100">Acordar cedo</span>” às 19:49h
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Segunda{' '}
            <span className="text-zinc-400 text-xs leading-snug font-normal">
              (11 de Agosto)
            </span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm leading-relaxed text-zinc-400">
                Você completou “
                <span className="text-zinc-100">Praticar exercício</span>” às
                19:49h
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm leading-relaxed text-zinc-400">
                Você completou “
                <span className="text-zinc-100">Acordar cedo</span>” às 19:49h
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
