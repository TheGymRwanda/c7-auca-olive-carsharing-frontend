import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import { AppRoutes } from './routes'
import BackButton from './components/BackButton'

configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return <AppRoutes />
}

export default App
