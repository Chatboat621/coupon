import { StatCard } from "../components/StatCard";
import { RevenueChart } from "../components/chart/RevenueChart";
import { SalesByCategory } from "../components/chart/SalesByCategory";
import { TopPerformingCoupons } from "../components/TopPerformingCoupons";
import { RecentActivity } from "../components/RecentActivity";
import {
  DollarSign,
  ShoppingCart,
  Users,
  Ticket,
} from "lucide-react";

export default function Index() {
  return (
    <>

      <main className="flex-1">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Dashboard
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Welcome back! Here's what's happening today.
            </p>
          </div>
        </div>

        {/* Page Content */}
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
          {/* Stats */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              label="Total Revenue"
              value="$58.96"
              trend="+12.5%"
              icon={<DollarSign className="w-6 h-6 text-blue-600" />}
              iconBg="bg-blue-600/10"
            />

            <StatCard
              label="Total Orders"
              value="4"
              trend="+8.2%"
              icon={<ShoppingCart className="w-6 h-6 text-purple-600" />}
              iconBg="bg-purple-600/10"
            />

            <StatCard
              label="Active Users"
              value="5"
              trend="+15.3%"
              icon={<Users className="w-6 h-6 text-green-600" />}
              iconBg="bg-green-600/10"
            />

            <StatCard
              label="Coupons Sold"
              value="5483"
              trend="-2.4%"
              trendColor="text-red-500"
              icon={<Ticket className="w-6 h-6 text-orange-500" />}
              iconBg="bg-orange-500/10"
            />
          </section>

          {/* Charts */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <SalesByCategory />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TopPerformingCoupons />
            </div>
            <RecentActivity />
          </section>
        </div>
      </main>
    </>
  );
}
