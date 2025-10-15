import { configure } from 'axios-hooks'
import { AppRoutes } from './routes'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

const App = () => <AppRoutes />

export default App
