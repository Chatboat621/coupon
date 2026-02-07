import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "../lib/utils";

interface StatCardProps {
  icon: React.ReactNode;
  iconBg: string;
  value: string | number;
  label: string;
  trend?: string;
  trendColor?: string;
}

export function StatCard({
  icon,
  iconBg,
  value,
  label,
  trend,
  trendColor = "text-green-500",
}: StatCardProps) {
  const isNegative = trend?.startsWith("-");

  return (
    <div className="bg-white rounded-xl border border-border p-5">
      {/* Top row: icon + trend */}
      <div className="flex items-center justify-between">
        <div
          className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center",
            iconBg
          )}
        >
          {icon}
        </div>

        {trend && (
          <div
            className={cn(
              "flex items-center gap-1 text-sm font-medium",
              trendColor
            )}
          >
            {isNegative ? (
              <TrendingDown className="w-4 h-4" />
            ) : (
              <TrendingUp className="w-4 h-4" />
            )}
            {trend}
          </div>
        )}
      </div>

      {/* Value */}
      <div className="mt-4 text-3xl font-bold text-foreground">
        {value}
      </div>

      {/* Label */}
      <p className="mt-1 text-sm text-gray-500">
        {label}
      </p>
    </div>
  );
}
