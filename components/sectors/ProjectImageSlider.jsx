"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { StrokeIcon } from "@/components/icons/StrokeIcon";

import "swiper/css";

const ARROW_CLASS =
  "absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-zinc-800 shadow-sm backdrop-blur-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sys-yellow";

/**
 * @param {{
 *   images: string[];
 *   alt: string;
 *   labels: { previous: string; next: string };
 * }} props
 */
export default function ProjectImageSlider({ images, alt, labels }) {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbsRef = useRef(null);
  const hasMultipleImages = images.length > 1;

  // Keep the active thumbnail visible (horizontal scroll only, never moves the page)
  useEffect(() => {
    const container = thumbsRef.current;
    const thumb = container?.children[activeIndex];
    if (!container || !thumb) return;
    const left = thumb.offsetLeft - (container.clientWidth - thumb.clientWidth) / 2;
    container.scrollTo({ left, behavior: "smooth" });
  }, [activeIndex]);

  return (
    <div className="flex w-full min-w-0 flex-col gap-3">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-200">
        {hasMultipleImages ? (
          <>
            <Swiper
              onSwiper={setMainSwiper}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              rewind
              className="h-full w-full"
            >
              {images.map((src, index) => (
                <SwiperSlide key={`${src}-${index}`}>
                  <Image
                    src={src}
                    alt={`${alt} (${index + 1}/${images.length})`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              onClick={() => mainSwiper?.slidePrev()}
              aria-label={labels.previous}
              className={`${ARROW_CLASS} left-2`}
            >
              <StrokeIcon
                name="chevron-left"
                paths={["M15 19l-7-7 7-7"]}
                className="h-4 w-4"
                strokeWidth={2.5}
              />
            </button>
            <button
              type="button"
              onClick={() => mainSwiper?.slideNext()}
              aria-label={labels.next}
              className={`${ARROW_CLASS} right-2`}
            >
              <StrokeIcon
                name="chevron-right"
                paths={["M9 5l7 7-7 7"]}
                className="h-4 w-4"
                strokeWidth={2.5}
              />
            </button>
          </>
        ) : (
          images[0] && (
            <Image
              src={images[0]}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          )
        )}
      </div>

      {hasMultipleImages && (
        <div ref={thumbsRef} className="relative flex gap-2 overflow-x-auto pb-1">
          {images.map((src, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => mainSwiper?.slideTo(index)}
                aria-label={`${alt} (${index + 1}/${images.length})`}
                aria-current={isActive}
                className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-md border-2 transition ${
                  isActive
                    ? "border-sys-yellow opacity-100"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={src} alt="" fill sizes="64px" className="object-cover" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}