import { useState } from "react"
import { Link } from "react-router-dom"
import MenuBar from "../components/MenuBar"
import MoniShareTitle from "../components/MoniShareTitle"
import Button from "../components/Button"

const LandingPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleDrawer = () => setIsDrawerOpen(open => !open)

  return (
    <div className="flex min-h-screen flex-col bg-primary-dark">
      <MenuBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <div className="flex flex-1 flex-col items-center px-2">
        <div className="mt-16" />

        <div className="flex w-full max-w-[375px] flex-col items-center">
          <MoniShareTitle />

          <div className="mt-12" />

          <p className="mb-16 w-full max-w-[358px] text-center font-lora text-[20px] font-medium leading-[28px] text-white">
            Start sharing your Monis <br /> with the world
          </p>

          <div className="mb-6" />

          <Link to="/login" className="flex w-full justify-center">
            <Button
              variant="primary"
              size="lg"
              fullWidth={false}
              className="h-[45px] !w-[356px] rounded-[25px] text-base font-bold"
            >
              Log In
            </Button>
          </Link>

          <div className="mb-14" />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
