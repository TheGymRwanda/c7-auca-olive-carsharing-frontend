import React from 'react'
import ProfileIcon from '../assets/ProfileIcon'
import Ecocar from '../assets/Ecocar.svg'

interface MenuBarProps {
  isDrawerOpen: boolean
  toggleDrawer: () => void
}

const MenuBar: React.FC<MenuBarProps> = ({ isDrawerOpen, toggleDrawer }) => (
  <div className="relative flex h-16 w-full items-center justify-between rounded-b-2xl bg-[#111827] px-6 text-white shadow-lg">
    <div
      onClick={toggleDrawer}
      className="cursor-pointer text-xl  transition-all duration-200 hover:text-gray-300"
    >
      {isDrawerOpen ? 'Close' : 'Menu'}
    </div>

    <div className="absolute -bottom-3 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-[#0f172a] bg-[#111827] shadow-md">
      <img src={Ecocar} alt="Logo" className="h-12 w-16" />
    </div>

    <div>
      <ProfileIcon className="h-8 w-8" />
    </div>
  </div>
)

export default MenuBar
