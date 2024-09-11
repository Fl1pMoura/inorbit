import logo from '../assets/logo-in-orbit.svg'
import letsStart from '../assets/lets-start.svg'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

export function EmptyState() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" className="max-w-28" />
      <img src={letsStart} alt="in.orbit" className="max-w-80" />
      <div>
        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora
          mesmo?
        </p>
        <DialogTrigger asChild>
          <Button className="mx-auto mt-5">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>
    </section>
  )
}
