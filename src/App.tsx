import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import Button from './components/Button'

configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <main className="mx-auto flex min-h-screen w-1/3 flex-col gap-8 py-10">
      <Button variant="secondary" loading={false} onClick={() => alert('Button clicked!')}>
        Book Car
      </Button>
      <Button variant="primary" loading={true}>
        Book Car
      </Button>
      <Button variant="ghost" loading={false}>
        Book Car
      </Button>
      <Button variant="primary" size="sm" loading={false} fullWidth>
        Book Car
      </Button>
    </main>
  )
}

export default App
