import {
  ShoppingCart,
  Users,
  Ticket,
  TrendingUp,
} from "lucide-react";

interface Activity {
  id: number;
  type: "purchase" | "signup" | "coupon" | "milestone";
  user: string;
  action: string;
  details: string;
  timestamp: string;
  icon: React.ReactNode;
  bgColor: string;
}

const activities: Activity[] = [
  {
    id: 1,
    type: "purchase",
    user: "John Smith",
    action: "purchased",
    details: "Netflix 50% OFF",
    timestamp: "2 minutes ago",
    icon: <ShoppingCart className="w-4 h-4" />,
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    type: "coupon",
    user: "Alice Johnson",
    action: "redeemed coupon",
    details: "Amazon Coupon",
    timestamp: "35 minutes ago",
    icon: <Ticket className="w-4 h-4" />,
    bgColor: "bg-purple-50",
  },
  {
    id: 3,
    type: "signup",
    user: "Sarah Johnson",
    action: "registered",
    details: "New account",
    timestamp: "1 hour ago",
    icon: <Users className="w-4 h-4" />,
    bgColor: "bg-green-50",
  },
  {
    id: 4,
    type: "coupon",
    user: "Michael Chen",
    action: "purchased",
    details: "Spotify 70% OFF",
    timestamp: "3 hours ago",
    icon: <ShoppingCart className="w-4 h-4" />,
    bgColor: "bg-purple-50",
  },
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <h3 className="text-base font-semibold text-foreground mb-4">
        Recent Activity
      </h3>

      <div className="space-y-5">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4">
            {/* Icon */}
            <div
              className={`w-10 h-10 rounded-lg ${activity.bgColor} flex items-center justify-center flex-shrink-0`}
            >
              {activity.type === "purchase" && (
                <ShoppingCart className="w-5 h-5 text-blue-600" />
              )}
              {activity.type === "coupon" && (
                <Ticket className="w-5 h-5 text-purple-600" />
              )}
              {activity.type === "signup" && (
                <Users className="w-5 h-5 text-green-600" />
              )}
              {activity.type === "milestone" && (
                <TrendingUp className="w-5 h-5 text-orange-600" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground">
                {activity.user}
                <span className="font-normal text-gray-600">
                  {" "}
                  {activity.action}
                </span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {activity.details}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {activity.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
