import { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import TestingPage1 from '../pages/TestingPage1'
import TestingPage2 from '../pages/TestingPage2'
import MenuBar from '../components/MenuBar'

export function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/page1" element={<TestingPage1 />} />
      <Route path="/page2" element={<TestingPage2 />} />
      <Route path="/menu" element={<MenuBar />} />
    </Routes>
  )
}
