import AdminDashboard from "@/pages/Dashboard";
import AdminLogin from "@/pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedAdminRoute from "./ProtectedRoute";
import Users from "@/pages/Users";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { NotFount } from "@/pages/NotFound";

function AdminRoutes() {
  const { isAuthenticated } = useSelector((state: RootState) => state._auth);
  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" /> : <AdminLogin />}
      />
      <Route
        path="/"
        element={
          <ProtectedAdminRoute>
            <AdminDashboard />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/users"
        element={
          <ProtectedAdminRoute>
            <Users />
          </ProtectedAdminRoute>
        }
      />
      <Route path="*" element={<NotFount />} />
    </Routes>
  );
}

export default AdminRoutes;
