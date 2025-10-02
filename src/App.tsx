import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import ReusableButton from './components/Button'
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
      <h1 className="text-4xl font-bold">Hello to CarSharing</h1>
      <p>If you can read this, you have successfully started the base frontend repository!</p>
      <p>Happy coding!</p>
      <Button variant="secondary">Book Car</Button>

      {/* Added button variants for demonstration */}
      <div className="flex gap-4">
        <Button variant="ghost">Accept</Button>
        <Button variant="primary">Decline</Button>
      </div>

      <div className="flex gap-4">
        <Button variant="primary">Use Car</Button>
        <Button variant="secondary">Return</Button>
      </div>
    </main>
  )
}

export default App
