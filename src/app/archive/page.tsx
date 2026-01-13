import Image from "next/image";

type Photo = {
  id: string;
  src: string;
  alt: string;
  width: number; // Metadata for future features (lightbox, full-size view, etc.)
  height: number; // Metadata for future features (lightbox, full-size view, etc.)
};

const photos: Photo[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop",
    alt: "Photography archive image 1",
    width: 800,
    height: 600,
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop",
    alt: "Photography archive image 2",
    width: 800,
    height: 600,
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Photography archive image 3",
    width: 800,
    height: 600,
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
    alt: "Photography archive image 4",
    width: 800,
    height: 600,
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
    alt: "Photography archive image 5",
    width: 800,
    height: 600,
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
    alt: "Photography archive image 6",
    width: 800,
    height: 600,
  },
];

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
        {/* Uniform 4:3 aspect ratio for editorial grid consistency.
            Cropping is intentional - visual rhythm > individual image fidelity. */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-[4/3] overflow-hidden rounded-sm transition-all duration-200 ease-out hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-400 focus-visible:outline-offset-2"
              tabIndex={0}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-all duration-200"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
