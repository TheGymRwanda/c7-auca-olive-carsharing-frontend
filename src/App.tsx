import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import { AppRoutes } from './routes'
import AllCars from './pages/AllCars'

configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <>
      <AppRoutes />
      <AllCars />
    </>
  )
}

export default App
