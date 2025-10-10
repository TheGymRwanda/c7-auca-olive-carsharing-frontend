import { useState } from 'react'
import MenuBar from './MenuBar'
import Drawer from './Drawer'

function MainLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <div className="relative h-screen w-full bg-gray-100">
      <MenuBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      {isDrawerOpen && (
        <div className="absolute left-0 top-16 z-10">
          <Drawer />
        </div>
      )}
    </div>
  )
}

export default MainLayout
