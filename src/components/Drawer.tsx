import carsM from '../assets/carsM.png'
import CarIcon from '../assets/CarIcon'
import CarPlusIcon from '../assets/CarPlusIcon'
import logout from '../assets/logout.png'
import stairs from '../assets/stairs.png'
import list from '../assets/List.png'

const Drawer = () => (
  <div className="ml-6 mt-8 flex h-80 w-64 flex-1 flex-col items-center justify-center rounded-lg bg-[#3e7591] ">
    <div className="mt-4 flex h-full w-full flex-col space-y-3  rounded-t-lg bg-[#3e7591] pl-16 text-white">
      <div className="flex flex-row space-x-4">
        <CarIcon />
        <p>Book A Car</p>
      </div>
      <div className="flex flex-row space-x-4">
        <img src={stairs} className="" />
        <p>My Bookings</p>
      </div>
    </div>
    <div className="w-full bg-[#3e7591] px-4">
      <div className="border-b border-gray-300"></div>
    </div>
    <div className="mb-3 mt-4 flex h-full w-full flex-col space-y-3 bg-[#3e7591] pl-16 text-white ">
      <div className="flex flex-row space-x-4">
        <img src={carsM} />
        <p>See My Cars</p>
      </div>
      <div className="flex flex-row space-x-4">
        <img src={list} />
        <p className="ml-4">My Car&apos;s Bookings</p>
      </div>
      <div className="flex flex-row space-x-4">
        <CarPlusIcon />
        <p>Add New Car</p>
      </div>
    </div>
    <div className="w-full bg-[#3e7591]  px-4">
      <div className="border-b border-gray-300"></div>
    </div>
    <div className="mt-4 flex h-full w-full flex-col space-y-3 rounded-b-lg bg-[#3e7591]  pl-16 text-white">
      <div className="flex flex-row space-x-4">
        <img src={logout} />
        <p>Log Out</p>
      </div>
    </div>
  </div>
)

export default Drawer
