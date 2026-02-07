import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Ticket,
  Users,
  ShoppingCart,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { cn } from "../lib/utils";
import Logo from "../assets/logo.svg";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/", id: "dashboard" },
  {
    icon: Ticket,
    label: "Coupon Management",
    path: "/coupons",
    id: "coupons",
  },
  { icon: Users, label: "User Management", path: "/users", id: "users" },
  {
    icon: ShoppingCart,
    label: "Order Management",
    path: "/orders",
    id: "orders",
  },
  {
    icon: TrendingUp,
    label: "Coupon Tracking",
    path: "/tracking",
    id: "tracking",
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <img src={Logo} alt="CouponMarket" className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900">CouponMarket</h1>
            <p className="text-xs text-gray-500">Admin Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.id}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <Icon
                className={cn(
                  "w-5 h-5",
                  isActive ? "text-blue-600" : "text-gray-400"
                )}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 p-4 space-y-3">
        <div className="flex items-center gap-3">
          {/* AD Avatar */}
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-sm">AD</span>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900">Admin User</p>
            <p className="text-xs text-gray-500">
              admin@couponmarket.com
            </p>
          </div>
        </div>

       <button className="w-full flex items-center gap-2 text-left text-sm text-blue-600 hover:text-blue-700 transition">
  <ExternalLink className="w-4 h-4" />
  View Customer Site
</button>

      </div>
    </aside>
  );
}
