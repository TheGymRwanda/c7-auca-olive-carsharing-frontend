import { Link } from "react-router-dom"
import type { MenuBarProps } from "../util/types"
import ProfileIcon from "../assets/ProfileIcon"
import Ecocar from "../assets/Ecocar.svg"

const MenuBar = ({ isDrawerOpen, toggleDrawer }: MenuBarProps) => (
  <div className="relative flex h-16 w-full items-center justify-between rounded-b-2xl bg-primary-darkblue px-6 text-white">
    <div
      onClick={toggleDrawer}
      className="cursor-pointer text-lg font-semibold transition-all duration-200 hover:text-gray-300"
    >
      {isDrawerOpen ? "Close" : "Menu"}
    </div>

    <Link
      to="/"
      className="absolute -bottom-3 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-primary-borderblue bg-primary-darkblue shadow-lg"
    >
      <img src={Ecocar} alt="Car Logo" className="h-12 w-16" />
    </Link>

    <ProfileIcon className="h-8 w-8" />
  </div>
)

export default MenuBar
