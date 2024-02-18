import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import('../pages/Home'));

export function AppRouter() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}