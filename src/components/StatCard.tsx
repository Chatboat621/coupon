import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "../lib/utils";

type StatCardVariant = "dashboard" | "compact";

interface StatCardProps {
  icon?: React.ReactNode;
  iconBg?: string;
  value: string | number;
  label: string;
  trend?: string;
  trendColor?: string;
  valueColor?: string;
variant?: StatCardVariant;
}

export function StatCard({
  icon,
  iconBg,
  value,
  label,
  trend,
  trendColor = "text-green-500",
  valueColor,
  variant = "dashboard",
}: StatCardProps) {
  const isNegative = trend?.startsWith("-");

  return (
  <>
    {/* ================= DASHBOARD VARIANT ================= */}
    {variant === "dashboard" && (
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
        <div
          className={cn(
            "mt-4 text-3xl font-bold",
            valueColor ?? "text-foreground"
          )}
        >
          {value}
        </div>

        {/* Label */}
        <p className="mt-1 text-sm text-gray-500">{label}</p>
      </div>
    )}

    {/* ================= COMPACT VARIANT ================= */}
    {variant === "compact" && (
      <div className="bg-white rounded-xl border border-border p-5 flex items-center gap-4">
      {icon && (
  <div
    className={cn(
      "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
      iconBg
    )}
  >
    {icon}
  </div>
)}

        {/* Value + Label */}
        
        <div>
          <p
            className={cn(
              "text-xl font-bold",
              valueColor ?? "text-foreground"
            )}
          >
            {value}
          </p>
          <p className="text-sm text-gray-500">{label}</p>
        </div>
      </div>
    )}
  </>
);
}