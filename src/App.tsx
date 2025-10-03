import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import CarCard from './pages/CarCard'
import { AppRoutes } from './routes'

configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <>
      <AppRoutes />
      <CarCard />
    </>
  )
}

export default App
