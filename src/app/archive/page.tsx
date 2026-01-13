export default function Archive() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-12 text-center sm:mb-16 md:mb-20">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
          Archive
        </h1>
        <p className="mx-auto max-w-2xl text-base font-light text-neutral-500 md:text-lg">
          A collection of photographs spanning different moments, places, and
          perspectives.
        </p>
      </header>

      <section aria-label="Photography archive">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {/* Photo grid will be inserted here */}
        </div>
      </section>
    </div>
  );
}
