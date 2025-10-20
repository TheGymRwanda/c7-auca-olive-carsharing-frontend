import Error from "../components/Error"
import MainLayout from "../components/MainLayout"

const ErrorPage = () => (
  <MainLayout>
    <div className="flex h-full flex-col items-center justify-center bg-primary-dark overflow-auto">
      <Error />
    </div>
  </MainLayout>
)

export default ErrorPage
