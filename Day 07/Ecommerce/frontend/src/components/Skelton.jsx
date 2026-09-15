const SkeletonCard = () => {
  return (
    <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
      {/* Image  */}
      <div className="h-64 w-full animate-pulse bg-gray-200"></div>

      {/* Content  */}
      <div className="space-y-4 p-5">
        {/* Category */}
        <div className="h-3 w-20 animate-pulse rounded-full bg-gray-200"></div>

        {/* Product title */}
        <div className="h-5 w-3/4 animate-pulse rounded-full bg-gray-200"></div>

        {/* Description */}
        <div className="h-3 w-full animate-pulse rounded-full bg-gray-200"></div>
        <div className="h-3 w-2/3 animate-pulse rounded-full bg-gray-200"></div>

        {/* Price + button */}
        <div className="flex items-center justify-between pt-2">
          <div className="h-6 w-20 animate-pulse rounded-full bg-gray-200"></div>
          <div className="h-10 w-24 animate-pulse rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

const Skelton = () => {
  return (
    <div className="mx-auto max-w-7xl mt-5">
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skelton;
