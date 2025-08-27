import CardSkeleton from "@/components/CardSkeleton";

export default function Loading() {
  return (
    <main className="bg-gray-900 text-white min-h-screen p-8 md:p-16">
      <section className="text-center mb-16">
        <div className="h-12 w-3/4 max-w-lg mx-auto bg-gray-700 rounded animate-pulse mb-4"></div>
        <div className="h-4 w-full max-w-2xl mx-auto bg-gray-700 rounded animate-pulse mb-2"></div>
        <div className="h-4 w-5/6 max-w-2xl mx-auto bg-gray-700 rounded animate-pulse"></div>
      </section>

      <section className="text-center mb-16">
        <div className="h-8 w-48 mb-8 border-l-4 border-teal-500 pl-4 inline-block bg-gray-700 animate-pulse"></div>
        <div className="flex justify-center items-center gap-6 mt-4">
          <div className="w-8 h-8 rounded-full bg-gray-700 animate-pulse"></div>
          <div className="w-8 h-8 rounded-full bg-gray-700 animate-pulse"></div>
          <div className="w-8 h-8 rounded-full bg-gray-700 animate-pulse"></div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-teal-500 pl-4">
          My projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-teal-500 pl-4">
          Games I&apos;ve played
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
