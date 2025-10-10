import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
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
    </>
  )
}

export default App
