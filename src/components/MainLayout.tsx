import { useState, ReactNode } from 'react'
import MenuBar from './MenuBar'
import Drawer from './Drawer'

interface MainLayoutProps {
  children?: ReactNode
}
function MainLayout({ children }: MainLayoutProps) {
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
