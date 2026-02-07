import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Index from "./pages/Index";
import CouponManagement from "./pages/CouponManagement";
import CreateCoupon from "./pages/CreateCoupon";
import UserManagement from "./pages/UserManagement";
import OrderManagement from "./pages/OrderManagement";
import CouponTracking from "./pages/CouponTracking";
import { AdminLayout } from "./layout/AdminLayout";

export default function App() {
  return (
    <Routes>
      {/* Default page */}
      <Route index element={<Login />} />

      {/* Auth */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<CreateAccount />} />

      {/* Dashboard / Other Pages */}
       <Route element={<AdminLayout />}>
      <Route path="dashboard" element={<Index />} />
      <Route path="coupons" element={<CouponManagement />} />
      <Route path="coupons/create" element={<CreateCoupon />} />
      <Route path="users" element={<UserManagement />} />
      <Route path="orders" element={<OrderManagement />} />
      <Route path="tracking" element={<CouponTracking />} />
    </Route>
    </Routes>
  );
}
