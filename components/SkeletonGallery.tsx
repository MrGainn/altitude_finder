import { Skeleton } from '@mui/material';

export default function SkeletonGallery() {
  return (
    <section className="my-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-center text-3xl font-semibold mb-8">App Gallery</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="relative w-[280px] h-[500px] md:w-[260px] md:h-[500px] rounded-xl overflow-hidden"
          >
            <Skeleton variant="rectangular" width="100%" height="100%" animation="wave" />
          </div>
        ))}
      </div>
    </section>
  );
}
