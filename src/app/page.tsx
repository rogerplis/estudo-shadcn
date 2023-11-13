import Image from 'next/image'
import { ModeToggle } from './components/mode-toggle'

export default function Home() {
  return (
    <main className="">
      <h1 className='text-primary'>Minha Landing page</h1>
      <ModeToggle/>
    </main>
  )
}
