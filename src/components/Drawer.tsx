import CarsM from '../assets/CarsM.svg'
import CarIcon from '../assets/CarIcon'
import CarPlusIcon from '../assets/CarPlusIcon'
import Logout from '../assets/LogOut.svg'
import Stairs from '../assets/Stairs.svg'
import List from '../assets/List.svg'
import { Link } from 'react-router-dom'

const Drawer = () => (
  <div className="ml-4 mt-6 flex h-72 w-52 flex-col items-center justify-center rounded-lg bg-primary-light">
    <div className="mt-4 flex h-44 w-full flex-col space-y-3 rounded-t-lg bg-primary-light pl-8 text-white">
      <Link to="/book-car" className="flex flex-row space-x-4 hover:bg-white/20">
        <CarIcon />
        <p>Book A Car</p>
      </Link>
      <Link to="/manage-bookings" className="flex flex-row space-x-4 hover:bg-white/20">
        <img src={Stairs} alt="My Bookings icon" />
        <p>My Bookings</p>
      </Link>
    </div>
    <div className="mt-2 w-full bg-primary-light px-4">
      <div className="border-b border-gray-300"></div>
    </div>
    <div className="mb-3 mt-4 flex h-44 w-full flex-col space-y-3 bg-primary-light pl-8 text-white">
      <div className="font-medium">My cars</div>
      <Link to="/my-cars" className="flex flex-row space-x-4 hover:bg-white/20">
        <img src={CarsM} alt="My cars icon" />
        <p>See My Cars</p>
      </Link>
      <Link to="/own-rented" className="flex flex-row space-x-4 hover:bg-white/20">
        <img src={List} alt="Car booking icon" />
        <p className="ml-4">My Car&apos;s Bookings</p>
      </Link>
      <Link to="/add-car" className="flex flex-row space-x-4 hover:bg-white/20">
        <CarPlusIcon />
        <p>Add New Car</p>
      </Link>
    </div>
    <div className="w-full bg-primary-light px-4">
      <div className="border-b border-gray-300"></div>
    </div>
    <div className="mt-6 flex h-36 w-full flex-col space-y-3 rounded-b-lg bg-primary-light pl-8 text-white">
      <div className="flex flex-row space-x-4 hover:bg-white/20">
        <img src={Logout} alt="Logout icon" />
        <p>Log Out</p>
      </div>
    </div>
  </div>
)

export default Drawer
