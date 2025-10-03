import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import Button from './components/Button'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
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
    </main>
  )
}

export default App
