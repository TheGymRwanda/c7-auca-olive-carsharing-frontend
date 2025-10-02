import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import ErrorPage from './ErrorPage'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <section className="mx-auto flex min-h-screen flex-col items-center justify-between gap-8 bg-[#265e78] py-10">
      <ErrorPage />
    </section>
  )
}

export default App
