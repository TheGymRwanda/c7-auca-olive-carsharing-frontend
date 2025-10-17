import { useState, ReactNode } from "react"
import MenuBar from "./MenuBar"
import Drawer from "./Drawer"
import type { MainLayoutProps } from "../util/types"

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen)

  return (
    <div className="relative h-screen w-full flex flex-col">
      <div className="fixed top-0 left-0 w-full z-20">
        <MenuBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        {isDrawerOpen && (
          <div className="absolute left-0 top-16 z-30">
            <Drawer />
          </div>
        )}
      </div>
      <main className="h-[calc(100vh-4rem)] mt-16">{children}</main>
    </div>
  )
}

export default MainLayout
