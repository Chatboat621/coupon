import { TrendingUp, AlertCircle } from "lucide-react";
import { cn } from "../lib/utils";

interface Coupon {
  id: string;
  label: string;
  name: string;
  brand: string;
  views: number;
  sold: number;
  conversionRate: number;
  revenue: string;
  performance: "Good" | "Excellent" | "Needs Boost";
  performanceTrend?: number;
}

const coupons: Coupon[] = [
  {
    id: "1",
    label: "BOGO",
    name: "Buy 1 Get 1 Free - Any",
    brand: "McDonald's",
    views: 5538,
    sold: 1543,
    conversionRate: 28,
    revenue: "$6150.57",
    performance: "Good",
  },
  {
    id: "2",
    label: "$50 OFF",
    name: "$50 Off First Ride",
    brand: "Uber",
    views: 5245,
    sold: 1098,
    conversionRate: 21,
    revenue: "$3283.02",
    performance: "Good",
  },
  {
    id: "3",
     label: "FREE",
    name: "Free Delivery for 1 Month",
    brand: "DoorDash",
    views: 3193,
    sold: 876,
    conversionRate: 27,
    revenue: "$4371.24",
    performance: "Good",
  },
  {
    id: "4",
    label: "$30 OFF",
    name: "$30 Off Orders Over",
    brand: "Amazon",
    views: 2820,
    sold: 756,
    conversionRate: 26,
    revenue: "$4528.44",
    performance: "Good",
  },
  {
    id: "5",
    label: "25% OFF",
    name: "25% Off Entire Store",
    brand: "Nike",
    views: 2171,
    sold: 445,
    conversionRate: 20,
    revenue: "$4000.55",
    performance: "Needs Boost",
  },
  {
    id: "6",
        label: "50% OFF",
    name: "50% Off Premium",
    brand: "Netflix",
    views: 1623,
    sold: 342,
    conversionRate: 21,
    revenue: "$2732.58",
    performance: "Good",
  },
  {
    id: "7",
            label: "70% OFF",
    name: "70% Off Annual Premium",
    brand: "Spotify",
    views: 922,
    sold: 234,
    conversionRate: 25,
    revenue: "$8421.66",
    performance: "Good",
  },
  {
    id: "8",
            label: "40% OFF",
    name: "40% Off Monthly",
    brand: "Planet Fitness",
    views: 611,
    sold: 189,
    conversionRate: 31,
    revenue: "$2606.31",
    performance: "Excellent",
  },
];

function getPerformanceColor(
  performance: "Good" | "Excellent" | "Needs Boost"
) {
  switch (performance) {
    case "Good":
      return "text-green-500";
    case "Excellent":
      return "text-emerald-500";
    case "Needs Boost":
      return "text-red-500";
  }
}

function getPerformanceIcon(
  performance: "Good" | "Excellent" | "Needs Boost"
) {
  switch (performance) {
    case "Good":
    case "Excellent":
      return <TrendingUp className="w-4 h-4" />;
    case "Needs Boost":
      return <AlertCircle className="w-4 h-4" />;
  }
}

export function CouponTable() {
  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-bold text-foreground">
          Individual Coupon Performance
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-border">
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Coupon
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Views
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Sold
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Conversion Rate
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Revenue
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Performance
              </th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr
                key={coupon.id}
                className="border-b border-border hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600
  flex items-center justify-center text-white text-[10px] font-bold leading-tight text-center">
  {coupon.label.split(" ").map((word, i) => (
    <div key={i}>{word}</div>
  ))}
</div>
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {coupon.name}
                      </p>
                      <p className="text-xs text-gray-500">{coupon.brand}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-foreground">
                  {coupon.views}
                </td>
                <td className="px-6 py-4 text-sm text-foreground">
                  {coupon.sold}
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-2">
                  <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-yellow-400 rounded-full"
        style={{ width: `${coupon.conversionRate}%` }}
      />
    </div>
    <span className="text-foreground font-medium">
      {coupon.conversionRate}%
    </span>
  </div>

                </td>
                <td className="px-6 py-4 text-sm font-semibold text-green-600">
                  {coupon.revenue}
                </td>
                <td className="px-6 py-4">
                  <div
                    className={cn(
                      "flex items-center gap-2 text-sm font-medium",
                      getPerformanceColor(coupon.performance)
                    )}
                  >
                    {getPerformanceIcon(coupon.performance)}
                    {coupon.performance}
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
