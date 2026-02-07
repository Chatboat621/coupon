import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Entertainment", value: 2340 },
  { name: "Shopping", value: 1890 },
  { name: "Food & Dining", value: 1650 },
];

const COLORS = ["#6366f1", "#8b5cf6", "#f59e0b"];

export function SalesByCategory() {
  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <h3 className="text-base font-bold text-foreground mb-4">
        Sales by Category
      </h3>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              fontSize: "12px",
            }}
          />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={95}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Custom legend */}
      <div className="mt-6 space-y-3">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[idx] }}
              />
              {item.name}
            </div>

            <span className="font-semibold text-gray-900">
              ${item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
