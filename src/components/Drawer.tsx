import CarIcon from '../assets/CarIcon'

const Drawer = () => (
  <div className="ml-16 mt-16 flex h-80 w-72 flex-1 flex-col items-center justify-center rounded-lg bg-[#3e7591] ">
    <div className="mt-4 flex h-full w-full flex-col space-y-3 rounded-t-lg bg-[#3e7591] pl-20 text-white">
      <div className="flex flex-row space-x-4">
        <CarIcon />
        <p>Book A Car</p>
      </div>
      <div className="flex flex-row space-x-4">
        <CarIcon />
        <p>My Bookings</p>
      </div>
    </div>
    <div className="w-full bg-[#3e7591] px-4">
      <div className="border-b border-gray-300"></div>
    </div>
    <div className="mb-3 mt-4 flex h-full w-full flex-col space-y-3 bg-[#3e7591] pl-20 text-white ">
      <div className="flex flex-row space-x-4">
        <CarIcon />
        <p>See My Cars</p>
      </div>
      <div className="flex flex-row space-x-4">
        <CarIcon />
        <p className="ml-4">My Car&apos;s Bookings</p>
      </div>
      <div className="flex flex-row space-x-4">
        <CarIcon />
        <p>Add New Car</p>
      </div>
    </div>
    <div className="w-full bg-[#3e7591]  px-4">
      <div className="border-b border-gray-300"></div>
    </div>
    <div className="mt-4 flex h-full w-full flex-col space-y-3 rounded-b-lg bg-[#3e7591]  pl-20 text-white">
      <div className="flex flex-row space-x-4">
        <CarIcon />
        <p>Log Out</p>
      </div>
    </div>
  </div>
)

export default Drawer
