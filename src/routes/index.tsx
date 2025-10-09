import { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import MenuBar from '../components/MenuBar'
import ErrorPage from '../pages/ErrorPage'

export function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuBar />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
