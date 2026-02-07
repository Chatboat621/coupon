interface Coupon {
  id: number;
  rank: number;
  name: string;
  brand: string;
  category: string;
  sold: number;
  revenue: string;
  bgColor: string;
  textColor: string;
  label: string;
}

const coupons: Coupon[] = [
  {
    id: 1,
    rank: 1,
    name: "Buy 1 Get 1 Free - Any Menu Item",
    brand: "McDonald's",
    category: "Food & Dining",
    sold: 1543,
    revenue: "$6156.57",
    bgColor: "bg-blue-500",
    textColor: "text-white",
    label: "BOGO",
  },
  {
    id: 2,
    rank: 2,
    name: "$50 Off First Ride",
    brand: "Uber",
    category: "Travel",
    sold: 1098,
    revenue: "$3283.02",
    bgColor: "bg-purple-500",
    textColor: "text-white",
    label: "$50 OFF",
  },
  {
    id: 3,
    rank: 3,
    name: "Free Delivery for 1 Month",
    brand: "DoorDash",
    category: "Food & Dining",
    sold: 876,
    revenue: "$4371.24",
    bgColor: "bg-purple-500",
    textColor: "text-white",
    label: "FREE",
  },
  {
    id: 4,
    rank: 4,
    name: "$30 Off Orders Over $100",
    brand: "Amazon",
    category: "Shopping",
    sold: 756,
    revenue: "$4528.44",
    bgColor: "bg-purple-500",
    textColor: "text-white",
    label: "$30 OFF",
  },
  {
    id: 5,
    rank: 5,
    name: "25% Off Entire Store",
    brand: "Nike",
    category: "Fashion",
    sold: 445,
    revenue: "$4000.55",
    bgColor: "bg-purple-500",
    textColor: "text-white",
    label: "25% OFF",
  },
];

export function TopPerformingCoupons() {
  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <h3 className="text-lg font-bold text-foreground mb-6">
        Top Performing Coupons
      </h3>
      <div className="space-y-4">
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {/* Rank and Icon */}
            <div className="flex  items-center gap-3 min-w-max">
              <span className="text-xs font-semibold text-gray-600">#{coupon.rank}</span>
              <div
                className={`w-12 h-12 rounded-lg ${coupon.bgColor} ${coupon.textColor} flex items-center justify-center font-bold text-sm`}
              >
               <div className="text-center leading-tight">
    {coupon.label.split(" ").map((word, i) => (
      <div key={i}>{word}</div>
    ))}
  </div>
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-foreground text-sm mb-1 truncate">
                {coupon.name}
              </h4>
              <p className="text-xs text-gray-500">
                {coupon.brand} • {coupon.category}
              </p>
            </div>

            {/* Sold Count */}
            <div className="text-right min-w-max">
              <p className="font-semibold text-foreground">{coupon.sold}</p>
              <p className="text-xs text-gray-500">sold</p>
            </div>

            {/* Revenue */}
            <div className="text-right min-w-max">
              <p className="font-semibold text-green-600">{coupon.revenue}</p>
              <p className="text-xs text-gray-500">revenue</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
