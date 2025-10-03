import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import ErrorPage from './ErrorPage'
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
      <section className="mx-auto flex min-h-screen flex-col items-center justify-between gap-8 bg-[#265e78] py-10">
        <ErrorPage />
      </section>
    </>
  )
}

export default App
