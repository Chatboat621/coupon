import {
  Search,
  Eye,
  Download,
  CreditCard,
  CheckCircle,
} from "lucide-react";
import { StatCard } from "../components/StatCard";

interface Order {
  id: string;
  date: string;
  time: string;
  couponLabel: string;
  couponTitle: string;
  brand: string;
  amount: string;
  payment: string;
  status: "Completed" | "Pending" | "Cancelled";
}

const orders: Order[] = [
  {
    id: "ord-001",
    date: "Jan 20, 2026",
    time: "05:30 AM",
    couponLabel: "70%\nOFF",
    couponTitle: "70% Off Annual",
    brand: "Spotify",
    amount: "$35.99",
    payment: "Credit Card ••••1234",
    status: "Completed",
  },
  {
    id: "ord-002",
    date: "Jan 15, 2026",
    time: "05:30 AM",
    couponLabel: "50%\nOFF",
    couponTitle: "50% Off",
    brand: "Netflix",
    amount: "$7.99",
    payment: "PayPal",
    status: "Completed",
  },
  {
    id: "ord-003",
    date: "Jan 10, 2026",
    time: "05:30 AM",
    couponLabel: "$30\nOFF",
    couponTitle: "$30 Off Orders",
    brand: "Amazon",
    amount: "$5.99",
    payment: "Credit Card ••••1234",
    status: "Completed",
  },
  {
    id: "ord-004",
    date: "Jan 5, 2026",
    time: "05:30 AM",
    couponLabel: "25%\nOFF",
    couponTitle: "25% Off Entire",
    brand: "Nike",
    amount: "$8.99",
    payment: "Debit Card",
    status: "Completed",
  },
];

export default function OrderManagement() {
  return (
      <>

      <main className="flex-1">
          {/* Header */}
         
           <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Order Management
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Track and manage customer orders
            </p>
          </div>
        </div>

          {/* Stats */}
           <div className="max-w-7xl mx-auto px-6 py-8 space-y-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <StatCard value="4" label="Total Orders"
              variant="compact"
              />
            <StatCard value="4" label="Completed" valueColor="text-green-600"
              variant="compact"
             />
            <StatCard value="0" label="Pending" valueColor="text-amber-600"
              variant="compact"
             />
            <StatCard
              value="$58.96"
              label="Revenue"
              valueColor="text-blue-600"
              variant="compact"

            />
          </div>

          {/* Search & Filters */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-wrap items-center gap-4 justify-between">
            <div className="relative flex-1 min-w-[260px]">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by order ID, coupon, or brand..."
                className="w-full pl-9 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex gap-2">
              {["All", "Completed", "Pending", "Cancelled"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    tab === "All"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full min-w-[900px]">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {[
                    "Order ID",
                    "Date",
                    "Coupon",
                    "Amount",
                    "Payment",
                    "Status",
                    "Actions",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                  >
                    {/* Order ID */}
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {order.id}
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex flex-col">
                        <span>{order.date}</span>
                        <span className="text-xs text-gray-400">
                          {order.time}
                        </span>
                      </div>
                    </td>

                    {/* Coupon */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-xs font-bold flex items-center justify-center text-center leading-tight">
                          {order.couponLabel.split("\n").map((l, i) => (
                            <div key={i}>{l}</div>
                          ))}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {order.couponTitle}
                          </p>
                          <p className="text-xs text-gray-500">
                            {order.brand}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      {order.amount}
                    </td>

                    {/* Payment */}
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-gray-400" />
                        {order.payment}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                        <CheckCircle className="w-4 h-4" />
                        Completed
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3 text-gray-500">
                        <button className="hover:text-blue-600">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="hover:text-blue-600">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
       

      </main>
    </>
  );
}
