export default function CardSkeleton() {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-48 bg-gray-700 animate-pulse"></div>
      <div className="p-6">
        <div className="h-6 w-3/4 mb-4 bg-gray-700 rounded animate-pulse"></div>
        <div className="h-4 w-full mb-2 bg-gray-700 rounded animate-pulse"></div>
        <div className="h-4 w-5/6 mb-4 bg-gray-700 rounded animate-pulse"></div>
        <div className="flex flex-wrap gap-2">
          <div className="h-5 w-16 bg-gray-700 rounded-full animate-pulse"></div>
          <div className="h-5 w-20 bg-gray-700 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
