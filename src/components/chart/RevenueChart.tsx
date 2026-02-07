import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Mar", revenue: 4000, orders: 2 },
  { date: "Apr", revenue: 5500, orders: 3 },
  { date: "May", revenue: 6200, orders: 4 },
  { date: "Jun", revenue: 7800, orders: 5 },
  { date: "Jul", revenue: 8900, orders: 6 },
  { date: "Jun", revenue: 10500, orders: 7 },
];

export function RevenueChart() {
  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <h3 className="text-lg font-bold text-foreground mb-6">Revenue Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            name="Revenue ($)"
            strokeWidth={2}
            dot={{ fill: "#3b82f6", r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#8b5cf6"
            name="Orders"
            strokeWidth={2}
            dot={{ fill: "#8b5cf6", r: 4 }}
          />
          <Legend />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
