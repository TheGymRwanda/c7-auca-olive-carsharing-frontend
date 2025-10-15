import Error from '../components/Error'
import MainLayout from '../components/MainLayout'

const ErrorPage = () => (
  <MainLayout>
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary-dark">
      <Error />
    </div>
  </MainLayout>
)

export default ErrorPage
