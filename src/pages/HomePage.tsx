import Button from '../components/Button'
import MoniShareTitle from '../components/MoniShareTitle'
import MenuBar from '../components/MenuBar'

const HomePage = () => (
  <>
    <MenuBar />
    <main className="mt-16 flex flex-col justify-center items-center">
      <MoniShareTitle />
      <p className="text-center text-white mt-10 font-normal text-lg">
        Hello Manuela!
        <br /> What are you up to today?
      </p>
      <div className="flex flex-col items-center w-full max-w-md space-y-4 mt-14 px-4">
        <Button variant="primary" size="md" fullWidth>
          Book Car
        </Button>
        <p className="text-white font-normal text-lg py-5">or</p>
        <Button variant="outlineWhite" size="md" fullWidth>
          See My Cars
        </Button>
        <Button variant="outlineWhite" size="md" fullWidth>
          See My Bookings
        </Button>
      </div>
    </main>
  </>
)

export default HomePage
