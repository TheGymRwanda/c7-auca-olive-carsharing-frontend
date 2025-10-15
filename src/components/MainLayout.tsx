import { useState } from 'react'
import MenuBar from './MenuBar'
import Drawer from './Drawer'
import type { MainLayoutProps } from '../util/types'

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  return (
    <div className="relative h-screen w-full">
      <MenuBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      {isDrawerOpen && (
        <div className="absolute left-0 top-16 z-10">
          <Drawer />
        </div>
      )}
      {children}
    </div>
  )
}

export default MainLayout
