"use client";

import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type Slide = {
  id: number;
  imageUrl: string;
};

type Props = {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
};

export default function Carousel({
  slides,
  autoPlay = true,
  interval = 5000,
}: Props) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, autoPlay, interval]);

  return (
    <div className="relative w-full overflow-visible">
      <div className="relative h-45 overflow-hidden rounded-xl sm:h-60 md:h-75">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.imageUrl}
              alt={`Slide ${slide.id}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        aria-label="Anterior"
        className="absolute -left-3.5 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:scale-105 transition md:-left-5 md:h-12 md:w-12"
      >
        <ChevronLeftIcon className="h-5 w-5 text-black" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Siguiente"
        className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:scale-105 transition md:-right-5 md:h-12 md:w-12"
      >
        <ChevronRightIcon className="h-5 w-5 text-black" />
      </button>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "w-6 bg-black" : "w-2 bg-black/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
