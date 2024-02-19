import { Route, Routes } from "react-router-dom";
import { DashboardRoutes } from "../Dashboard/routes/DashboardRoutes";

export function AppRouter() {

  return (
    <Routes>

      {/* Rutas Publicas */}

      {/* Rutas protegidas*/}
      <Route path="/*" element={<DashboardRoutes />} />
    </Routes>
  )
}