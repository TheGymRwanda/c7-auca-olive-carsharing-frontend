import MenuBar from '../components/MenuBar'
import Error from '../components/Error'
const ErrorPage = () => (
  <div className="flex min-h-screen flex-col bg-[#265e78]">
    <MenuBar />
    <div className="flex flex-1 flex-col items-center justify-center">
      <Error />
    </div>
  </div>
)

export default ErrorPage
