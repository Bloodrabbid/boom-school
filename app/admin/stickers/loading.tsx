export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-32 mb-8"></div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="h-10 bg-gray-200 rounded w-64 mb-8"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-full max-w-md"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="h-64 bg-gray-200 rounded"></div>
                <div className="h-64 bg-gray-200 rounded col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}