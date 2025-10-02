import CarIcon from "../assets/CarIcon"
import ProfileIcon from "../assets/ProfileIcon"

function MenuBar() {
  return (
    <div className="flex h-16 w-full flex-row gap-8 bg-[#111827] rounded-b-lg">
      <div className="flex h-16 w-4 flex-1 items-center justify-start ml-6 text-xl text-white">
        Menu
      </div>
      <div className="absolute -bottom-4 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full   bg-[#111827] text-white">
        <CarIcon className="h-8 w-8"/>
      </div>
      <div className="flex h-16 w-4  flex-1 items-center justify-end mr-6 text-xl text-white">
        <ProfileIcon className="h-8 w-8"/>
      </div>
    </div>
  )
}

export default MenuBar
