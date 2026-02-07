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
  { date: "Jan 20", redemptions: 300, views: 120 },
  { date: "Jan 23", redemptions: 350, views: 140 },
  { date: "Jan 26", redemptions: 320, views: 130 },
  { date: "Jan 29", redemptions: 400, views: 160 },
  { date: "Feb 1", redemptions: 380, views: 150 },
  { date: "Feb 4", redemptions: 450, views: 170 },
];

export function TrendsChart() {
  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <h3 className="text-lg font-bold text-foreground mb-6">
        Redemption & View Trends
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="redemptions"
            stroke="#8b5cf6"
            name="Redemptions"
            strokeWidth={2}
             dot={{ fill: "#8b5cf6", r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="views"
            stroke="#60a5fa"
            name="Views"
            strokeWidth={2}
             dot={{ fill: "#3b82f6", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
