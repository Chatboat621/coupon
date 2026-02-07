import { useNavigate } from "react-router-dom";
import  "../createcoupon.css";

const CreateCoupon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Create New Coupon
        </h2>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Coupon Title
            </label>
            <input
              type="text"
              placeholder="e.g., 50% Off Premium Subscription"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Brand
            </label>
            <input
              type="text"
              placeholder="e.g., Netflix"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Discount
            </label>
            <input
              type="text"
              placeholder="e.g., 50% OFF"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sale Price
            </label>
            <input
              type="text"
              placeholder="7.99"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            className="w-full rounded-lg border border-gray-300 px-4 py-3 h-28 resize-none"
            placeholder="Enter coupon description..."
          />
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock
            </label>
            <input
              type="number"
              placeholder="500"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Valid Until
            </label>
            <input
              type="date"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
          </div>
        </div>

        {/* Toggles */}
        <div className="flex items-center gap-8 mt-6 text-sm text-gray-700">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            Featured Coupon
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="rounded" />
            Active Status
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:opacity-90">
            Create Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCoupon;
