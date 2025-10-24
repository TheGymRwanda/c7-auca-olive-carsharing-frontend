import { ReactElement } from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import AllCars from "../pages/AllCars"
import AddCar from "../pages/AddCar"
import MyCars from "../pages/MyCars"
import ErrorPage from "../pages/ErrorPage"
import BookCar from "../pages/BookCar"
import MyBookings from "../pages/MyBookings"
import OwnRented from "../pages/OwnRented"
import CarDetailsPage from "../pages/CarDetailsPage"
import LandingPage from "../pages/LandingPage"
import Login from "../pages/Login"

export function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/allcars" element={<AllCars />} />
      <Route path="/add-car" element={<AddCar />} />
      <Route path="/my-cars" element={<MyCars />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/book-car" element={<BookCar />} />
      <Route path="/own-rented" element={<OwnRented />} />
      <Route path="/car-details/:id" element={<CarDetailsPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
