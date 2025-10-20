import ProfileIcon from "../assets/ProfileIcon"
import Ecocar from "../assets/Ecocar.svg"
import { Link } from "react-router-dom"
import { MenuBarProps } from "../util/types"
import { useState } from "react"

const MenuBar = ({ isDrawerOpen, toggleDrawer }: MenuBarProps) => {
  const [isLoggedIn] = useState(true)

  return (
    <div className="relative flex h-16 w-full items-center justify-between rounded-b-2xl bg-primary-darkblue px-6 text-white shadow-lg">
      {isLoggedIn && (
        <div
          onClick={toggleDrawer}
          className="cursor-pointer text-xl transition-all duration-200 hover:text-gray-300"
        >
          {isDrawerOpen ? "Close" : "Menu"}
        </div>
      )}

      <Link
        to="/"
        className="absolute -bottom-3 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-primary-borderblue bg-primary-darkblue shadow-md"
      >
        <img src={Ecocar} alt="Car Logo" className="h-12 w-16" />
      </Link>

      {isLoggedIn && <ProfileIcon className="h-8 w-8" />}
    </div>
  )
}

export default MenuBar
