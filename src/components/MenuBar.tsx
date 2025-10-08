import ProfileIcon from '../assets/ProfileIcon'
import lgHeader from '../assets/lgHeader.png'

function MenuBar() {
  return (
    <div className="flex h-16 w-full flex-row gap-8 rounded-b-lg bg-[#111827]">
      <div className="ml-6 flex h-16 w-4 flex-1 items-center justify-start text-xl text-white">
        Menu
      </div>

      <div className="absolute -bottom-4 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-[#111827] text-white">
        <img src={lgHeader} alt="Header Logo" className="h-12 w-12" />
      </div>

      <div className="mr-6 flex h-16 w-4 flex-1 items-center justify-end text-xl text-white">
        <ProfileIcon className="h-8 w-8" />
      </div>
    </div>
  )
}

export default MenuBar
