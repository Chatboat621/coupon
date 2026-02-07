interface QuickStatProps {
  value: string | number;
  label: string;
  bgColor: string;
  valueColor: string;
}

function QuickStatItem({
  value,
  label,
  bgColor,
  valueColor,
}: QuickStatProps) {
  return (
    <div className={`rounded-lg p-4 ${bgColor}`}>
      <p className="text-sm font-medium text-gray-600 mb-2">
        {label}
      </p>
      <p className={`text-2xl font-bold ${valueColor}`}>
        {value}
      </p>
    </div>
  );
}

export function QuickStats() {
  const stats = [
    {
      value: "72",
      label: "Today's Redemptions",
      bgColor: "bg-blue-50",
      valueColor: "text-blue-600",
    },
    {
      value: "480",
      label: "Today's Views",
      bgColor: "bg-green-50",
      valueColor: "text-green-600",
    },
    {
      value: "15%",
      label: "Today's Conv. Rate",
      bgColor: "bg-purple-50",
      valueColor: "text-purple-600",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <h3 className="text-base font-semibold text-foreground mb-4">
        Quick Stats
      </h3>

      <div className="space-y-3">
        {stats.map((stat, idx) => (
          <QuickStatItem key={idx} {...stat} />
        ))}
      </div>
    </div>
  );
}
