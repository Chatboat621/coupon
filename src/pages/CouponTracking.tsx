import { Sidebar } from "../components/Sidebar";
import { StatCard } from "../components/StatCard";
import { TrendsChart } from "../components/chart/TrendsChart";
import { QuickStats } from "../components/QuickStats";
import { CategoryChart } from "../components/chart/CategoryChart";
import { CouponTable } from "../components/CouponTable";
import { Eye, Percent, TrendingUp, BarChart3 } from "lucide-react";

export default function Index() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Coupon Tracking & Analytics
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Monitor coupon usage and redemption performance
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
          {/* Stats */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
              iconBg="bg-blue-600/10"
              value="909"
              label="Total Redemptions"
              trend="+18.2%"
              trendColor="text-green-500"
            />

            <StatCard
              icon={<Percent className="w-6 h-6 text-green-600" />}
              iconBg="bg-green-600/10"
              value="73%"
              label="Avg Redemption Rate"
              trend="+5.4%"
              trendColor="text-green-500"
            />

            <StatCard
              icon={<Eye className="w-6 h-6 text-purple-600" />}
              iconBg="bg-purple-600/10"
              value="2,785"
              label="Total Views"
              trend="+12.8%"
              trendColor="text-green-500"
            />

            <StatCard
              icon={<BarChart3 className="w-6 h-6 text-orange-600" />}
              iconBg="bg-orange-600/10"
              value="35%"
              label="Conversion Rate"
              trend="-3.2%"
              trendColor="text-red-500"
            />
          </section>

          {/* Trends and Quick Stats */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TrendsChart />
            </div>
            <QuickStats />
          </section>

          {/* Category Chart */}
          <section>
            <CategoryChart />
          </section>

          {/* Table */}
          <section>
            <CouponTable />
          </section>
        </div>
      </main>
    </div>
  );
}
