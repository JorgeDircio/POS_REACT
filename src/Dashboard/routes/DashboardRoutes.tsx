import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

const MainLayout = lazy(() => import('../layout/MainLayout'))
const HomePage = lazy(() => import('../pages/HomePage'))

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
