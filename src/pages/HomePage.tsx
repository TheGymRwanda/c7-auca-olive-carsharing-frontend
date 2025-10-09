import MoniShareTitle from '../components/MoniShareTitle'
import MenuBar from '../components/MenuBar'

const HomePage = () => (
  <>
    <MenuBar />
    <main className="">
      <MoniShareTitle />
      <p className="text-center text-white mt-10 font-medium text-lg">
        Hello Manuela!
        <br /> What are you up to today?
      </p>
    </main>
  </>
)

export default HomePage
