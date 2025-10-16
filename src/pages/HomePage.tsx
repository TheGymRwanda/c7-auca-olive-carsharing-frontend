import MainLayout from "../components/MainLayout"
import Button from "../components/Button"
import MoniShareTitle from "../components/MoniShareTitle"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <MainLayout>
      <main className="mt-16 flex flex-col items-center justify-center">
        <MoniShareTitle />
        <p className="mt-10 text-center text-lg font-normal text-white">
          Hello Manuela!
          <br /> What are you up to today?
        </p>
        <div className="mt-14 flex w-full max-w-md flex-col items-center space-y-4 px-4">
          <Button variant="primary" size="md" fullWidth onClick={() => navigate("/book-car")}>
            Book Car
          </Button>
          <p className="py-5 text-lg font-normal text-white">or</p>
          <Button
            variant="outlineWhite"
            size="md"
            fullWidth
            onClick={() => navigate("/own-rented")}
          >
            See My Cars
          </Button>
          <Button
            variant="outlineWhite"
            size="md"
            fullWidth
            onClick={() => navigate("/my-bookings")}
          >
            See My Bookings
          </Button>
        </div>
      </main>
    </MainLayout>
  )
}

export default HomePage
