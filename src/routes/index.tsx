import { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AllCars from '../pages/AllCars'

export function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/allcars' element={<AllCars />} />
    </Routes>
  )
}
