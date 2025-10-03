import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import CarDetails from './components/CarDetails'

configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <section className="mx-auto flex min-h-screen justify-center items-center flex-col gap-8 py-10 bg-[#265e78] text-white">
      <CarDetails />
    </section>
  )
}

export default App
