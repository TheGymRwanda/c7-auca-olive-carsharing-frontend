import { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import MenuBar from '../components/MenuBar'
import CarDetailsPage from '../pages/CarDetailsPage'

export function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuBar />} />
      <Route path="/car-details" element={<CarDetailsPage />} />
    </Routes>
  )
}
