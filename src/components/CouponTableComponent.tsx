import { Edit, Eye, Trash2, Package } from "lucide-react";

interface CouponRow {
  id: number;
  title: string;
  brand: string;
  category: string;
  featured?: boolean;
  price: string;
  originalPrice: string;
  stock: number;
  sold: number;
  status: "Active" | "Inactive";
  color: string;
  label: string;
}

const coupons: CouponRow[] = [
  {
    id: 1,
    title: "50% Off Premium Subscription",
    brand: "Netflix",
    category: "Entertainment",
    featured: true,
    price: "$7.99",
    originalPrice: "$15.99",
    stock: 500,
    sold: 342,
    status: "Active",
    color: "#6366f1",
    label: "50%\nOFF",
  },
  {
    id: 2,
    title: "$30 Off Orders Over $100",
    brand: "Amazon",
    category: "Shopping",
    featured: true,
    price: "$5.99",
    originalPrice: "$19.99",
    stock: 1000,
    sold: 756,
    status: "Active",
    color: "#3b82f6",
    label: "$30\nOFF",
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Free - Any Menu Item",
    brand: "McDonald's",
    category: "Food & Dining",
    price: "$3.99",
    originalPrice: "$8.99",
    stock: 2000,
    sold: 1543,
    status: "Active",
    color: "#8b5cf6",
    label: "BOGO",
  },
  {
    id: 4,
    title: "70% Off Annual Premium Plan",
    brand: "Spotify",
    category: "Entertainment",
    featured: true,
    price: "$35.99",
    originalPrice: "$119.88",
    stock: 800,
    sold: 234,
    status: "Active",
    color: "#6366f1",
    label: "70%\nOFF",
  },
  {
    id: 5,
    title: "$50 Off First Ride",
    brand: "Uber",
    category: "Travel",
    price: "$2.99",
    originalPrice: "$12.99",
    stock: 1500,
    sold: 1098,
    status: "Active",
    color: "#8b5cf6",
    label: "$50\nOFF",
  },
  {
    id: 6,
    title: "25% Off Entire Store",
    brand: "Nike",
    category: "Fashion",
    price: "$8.99",
    originalPrice: "$19.99",
    stock: 600,
    sold: 445,
    status: "Active",
    color: "#6366f1",
    label: "25%\nOFF",
  },
  {
    id: 7,
    title: "Free Delivery for 1 Month",
    brand: "DoorDash",
    category: "Food & Dining",
    featured: true,
    price: "$4.99",
    originalPrice: "$9.99",
    stock: 1200,
    sold: 876,
    status: "Active",
    color: "#8b5cf6",
    label: "FREE",
  },
  {
    id: 8,
    title: "40% Off Monthly Membership",
    brand: "Planet Fitness",
    category: "Fitness",
    price: "$13.79",
    originalPrice: "$22.00",
    stock: 400,
    sold: 189,
    status: "Active",
    color: "#3b82f6",
    label: "40%\nOFF",
  },
];

export function CouponTableComponent() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {["Coupon", "Category", "Price", "Stock", "Sold", "Status", "Actions"].map(
                (h) => (
                  <th
                    key={h}
                    className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {coupons.map((coupon) => (
              <tr
                key={coupon.id}
                className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                {/* Coupon */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    {/* Badge */}
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xs leading-tight text-center shrink-0"
                      style={{ backgroundColor: coupon.color }}
                    >
                      {coupon.label.split("\n").map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>

                    <div>
                      <div className="flex items-center gap-1">
                        <p className="font-semibold text-gray-900">
                          {coupon.title}
                        </p>
                        {coupon.featured && (
                          <span className="text-amber-400 text-sm leading-none">
                            ★
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{coupon.brand}</p>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="px-4 py-4 text-sm text-gray-600">
                  {coupon.category}
                </td>

                {/* Price */}
                <td className="px-4 py-4">
                  <p className="font-semibold text-gray-900">
                    {coupon.price}
                    <span className="ml-1 text-xs text-gray-500 line-through">
                      {coupon.originalPrice}
                    </span>
                  </p>
                </td>

                {/* Stock */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2 text-sm text-gray-900">
                    <Package className="w-5 h-5 text-gray-400" />
                    {coupon.stock}
                  </div>
                </td>

                {/* Sold */}
                <td className="px-4 py-4 text-sm text-gray-900">
                  {coupon.sold}
                </td>

                {/* Status */}
                <td className="px-4 py-4">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                    {coupon.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <button
                      title="Edit"
                      className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Edit className="w-5 h-5" />
                    </button>

                    <button
                      title="View"
                      className="w-8 h-8 flex items-center justify-center text-green-500 hover:text-green-600 transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                    </button>

                    <button
                      title="Delete"
                      className="w-8 h-8 flex items-center justify-center text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
