import { CouponFilters } from "../components/CouponFilters";
import { CouponTableComponent } from "../components/CouponTableComponent";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import { StatCard } from "../components/StatCard";

export default function CouponManagement() {
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
      <>

      <main className="flex-1">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Coupon Management
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Create, edit, and manage your coupons
              </p>
            </div>

            {/* ✅ Create Coupon button redirects to CreateCoupon page */}
            <button
              type="button"
              onClick={() => navigate("/coupons/create")}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:opacity-90 transition"
            >
              <Plus className="w-4 h-4" />
              Create Coupon
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
          {/* Stats Section */}
         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    <StatCard
      value="8"
      label="Total Coupons"
      valueColor="text-gray-900"
              variant="compact"

    />

    <StatCard
      value="8"
      label="Active"
      valueColor="text-green-600"
              variant="compact"

    />

    <StatCard
      value="0"
      label="Inactive"
      valueColor="text-gray-900"
              variant="compact"

    />

    <StatCard
      value="4"
      label="Featured"
      valueColor="text-blue-600"
              variant="compact"

    />
  </div>

          {/* Filters */}
          <CouponFilters />

          {/* Table */}
          <CouponTableComponent />
        </div>
      </main>
    </>
  );
}
