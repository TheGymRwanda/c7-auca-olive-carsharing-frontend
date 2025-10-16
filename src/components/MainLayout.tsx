import { useState } from "react"
import MenuBar from "./MenuBar"
import Drawer from "./Drawer"
import type { MainLayoutProps } from "../util/types"

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen)

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <MenuBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      {isDrawerOpen && (
        <div className="absolute left-0 top-16 z-10">
          <Drawer />
        </div>
      )}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}

export default MainLayout
