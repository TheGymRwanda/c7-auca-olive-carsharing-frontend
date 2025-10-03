import { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CarDetailsPage from '../pages/CarDetailsPage'

export function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/car-details" element={<CarDetailsPage />} />
    </Routes>
  )
}
