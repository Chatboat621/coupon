import { Sidebar } from "../components/Sidebar";
import { CouponFilters } from "../components/CouponFilters";
import { CouponTableComponent } from "../components/CouponTableComponent";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

export default function CouponManagement() {
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

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
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">8</div>
              <div className="text-sm text-gray-500">Total Coupons</div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">8</div>
              <div className="text-sm text-gray-500">Active</div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">0</div>
              <div className="text-sm text-gray-500">Inactive</div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-sm text-gray-500">Featured</div>
            </div>
          </div>

          {/* Filters */}
          <CouponFilters />

          {/* Table */}
          <CouponTableComponent />
        </div>
      </main>
    </div>
  );
}
