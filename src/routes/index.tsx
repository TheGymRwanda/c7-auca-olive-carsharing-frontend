import { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AllCars from '../pages/AllCars'
import AddCar from '../pages/AddCar'
import MyCars from '../pages/MyCars'
import LenderBookings from '../pages/LenderBookings'
import RenterBookings from '../pages/RenterBookings'
import ErrorPage from '../pages/ErrorPage'

export function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/allcars" element={<AllCars />} />
      <Route path="/add-car" element={<AddCar />} />
      <Route path="/my-cars" element={<MyCars />} />
      <Route path="/lender-bookings" element={<LenderBookings />} />
      <Route path="/renter-bookings" element={<RenterBookings />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
