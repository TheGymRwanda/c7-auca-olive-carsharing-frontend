import MoniShareTitle from "../components/MoniShareTitle"
import Button from "../components/Button"
import MenuBar from "../components/MenuBar"
import { useNavigate } from "react-router-dom"

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-primary-dark">
      <MenuBar isDrawerOpen={false} toggleDrawer={() => {}} isLoggedIn={false} />

      <div className="mt-20 flex flex-col items-center justify-center px-4 text-white">
        <div className="md:mt-24 lg:mt-12">
          <MoniShareTitle />
        </div>

        <p className="mt-28 w-full max-w-md text-center font-lora text-xl md:mt-32 md:text-2xl lg:mt-24">
          <span className="block">Start sharing your Monis</span>
          <span className="block">with the world</span>
        </p>

        <div className="mt-24 flex w-full max-w-md flex-col items-center md:mt-32">
          <Button variant="primary" fullWidth onClick={() => navigate("/login")}>
            Log In
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
