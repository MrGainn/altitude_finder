'use client';

import classNames from 'classnames';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = ['image1', 'image2', 'image3', 'image4', 'image5'];

export default function GallerySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1,
      spacing: 8,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 4, spacing: 8 },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      slider.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section className="my-8 px-4 max-w-6xl mx-auto">
      <div ref={sliderRef} className="keen-slider overflow-visible">
        {images.map((name, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex justify-center items-center"
          >
            <div className="relative w-[280px] h-[500px] md:w-[260px] md:h-[500px]">
              <Image
                src={`/img/${name}.jpg`}
                alt={`Screenshot ${idx + 1}`}
                fill
                className="rounded-xl shadow-xl object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {loaded && (
        <div className="flex justify-center mt-6 gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx)}
              className={classNames(
                'w-3 h-3 rounded-full transition-all duration-300',
                currentSlide === idx
                  ? 'bg-white scale-125'
                  : 'bg-gray-500 hover:bg-gray-300'
              )}
            />
          ))}
        </div>
      )}
    </section>
  );
}
