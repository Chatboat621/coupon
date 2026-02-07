import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { category: "Entertainment", redemptions: 240 },
  { category: "Shopping", redemptions: 180 },
  { category: "Food & Dining", redemptions: 150 },
  { category: "Travel", redemptions: 100 },
  { category: "Fashion", redemptions: 140 },
  { category: "Health", redemptions: 90 },
];

export function CategoryChart() {
  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <h3 className="text-lg font-bold text-foreground mb-6">
        Performance by Category
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="category" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Bar
            dataKey="redemptions"
            fill="#3b82f6"
            name="Redemptions"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
       <div className="mt-4 flex justify-center items-center gap-2 text-sm text-gray-600">
        <span className="w-3 h-3 rounded-sm bg-blue-500" />
        Redemptions
      </div>
    </div>
  );
}
