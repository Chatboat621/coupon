import {
  Search,
  MoreVertical,
  Calendar,
  ShoppingCart,
  DollarSign,
  Users,
  Mail,
} from "lucide-react";
import { StatCard } from './../components/StatCard';

interface User {
  id: number;
  name: string;
  email: string;
  initials: string;
  joined: string;
  orders: number;
  spent: string;
  status: "Active" | "Inactive";
}

const users: User[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    initials: "JS",
    joined: "Nov 15, 2025",
    orders: 12,
    spent: "$156.88",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    initials: "SJ",
    joined: "Oct 22, 2025",
    orders: 8,
    spent: "$98.45",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "m.chen@email.com",
    initials: "MC",
    joined: "Dec 1, 2025",
    orders: 15,
    spent: "$234.67",
    status: "Active",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@email.com",
    initials: "ED",
    joined: "Sep 10, 2025",
    orders: 5,
    spent: "$67.23",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Robert Wilson",
    email: "r.wilson@email.com",
    initials: "RW",
    joined: "Jan 5, 2026",
    orders: 3,
    spent: "$45.99",
    status: "Active",
  },
];

export default function UserManagement() {
  return (
      <>

      <main className="flex-1">
        
    
  <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <h1 className="text-2xl font-bold text-gray-900">
              User Management
            </h1>
            <p className="text-sm text-gray-500 mt-1">
                    Manage and monitor your user base

            </p>
          </div>
        </div>
 <div className="max-w-7xl mx-auto px-6 py-8 space-y-10">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
            <StatCard
              icon={<Users className="w-5 h-5 text-blue-600" />}
              value="5"
              label="Total Users"
              iconBg="bg-blue-50"
              variant="compact"
            />
            <StatCard
              icon={<Mail className="w-5 h-5 text-green-600" />}
              value="4"
              label="Active Users"
              iconBg="bg-green-50"
              variant="compact"
            />
            <StatCard
              icon={<DollarSign className="w-5 h-5 text-purple-600" />}
              value="$603.22"
              label="Total Revenue"
              iconBg="bg-purple-50"
              variant="compact"
            />
            <StatCard
              icon={<ShoppingCart className="w-5 h-5 text-orange-600" />}
              value="43"
              label="Total Orders"
              iconBg="bg-orange-50"
              variant="compact"
            />
          </div>

          {/* Search + Filters */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-wrap gap-4 items-center justify-between mb-10">
            <div className="relative flex-1 min-w-[260px]">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search users by name or email..."
                className="w-full pl-9 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex gap-2">
              <button className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium">
                All
              </button>
              <button className="px-5 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200">
                Active
              </button>
              <button className="px-5 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200">
                Inactive
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full min-w-[900px]">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {[
                    "User",
                    "Join Date",
                    "Total Orders",
                    "Total Spent",
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
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition"
                  >
                    {/* User */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-sm">
                          {user.initials}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {user.joined}
                      </div>
                    </td>

                    {/* Orders */}
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4 text-gray-400" />
                        {user.orders}
                      </div>
                    </td>

                    {/* Spent */}
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        {user.spent}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                        <MoreVertical className="w-5 h-5" />
                      </button>
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

