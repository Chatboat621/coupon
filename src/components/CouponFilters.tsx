import { useState } from "react";
import { Search } from "lucide-react";

type FilterType = "all" | "active" | "inactive";

interface CouponFiltersProps {
  onFilterChange?: (filter: FilterType) => void;
  onSearch?: (query: string) => void;
}

export function CouponFilters({ onFilterChange, onSearch }: CouponFiltersProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    onFilterChange?.(filter);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  return (
    /* Outer white container */
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
      <div className="flex items-center gap-4 flex-wrap">
        {/* Search */}
        <div className="relative flex-1 min-w-[250px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search coupons by title or brand..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          {(["all", "active", "inactive"] as FilterType[]).map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
