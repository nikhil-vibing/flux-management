export default function DashboardLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Welcome header skeleton */}
      <div className="flex justify-between items-start">
        <div>
          <div className="skeleton-shimmer h-9 w-64 rounded-lg" />
          <div className="skeleton-shimmer h-5 w-48 rounded-lg mt-2" />
        </div>
        <div className="skeleton-shimmer h-5 w-40 rounded-lg" />
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow-level-1 p-5 h-[110px]">
            <div className="flex items-center gap-4">
              <div className="skeleton-shimmer w-9 h-9 rounded-full" />
              <div>
                <div className="skeleton-shimmer h-8 w-16 rounded-lg" />
                <div className="skeleton-shimmer h-4 w-24 rounded-lg mt-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart skeleton */}
      <div className="bg-white rounded-xl shadow-level-1 p-6">
        <div className="skeleton-shimmer h-6 w-40 rounded-lg mb-5" />
        <div className="skeleton-shimmer h-[240px] w-full rounded-lg" />
      </div>

      {/* Table skeleton */}
      <div className="bg-white rounded-xl shadow-level-1 p-6">
        <div className="skeleton-shimmer h-6 w-36 rounded-lg mb-4" />
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="skeleton-shimmer h-12 w-full rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
