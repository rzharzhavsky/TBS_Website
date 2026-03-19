"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SLIDES = [
  {
    src: "/images/events/shabbat high holidays rabbi.JPG",
    alt: "Rabbi Doug speaking passionately from the podium with the colorful sanctuary mural behind him",
    position: "object-[center_40%] sm:object-[center_35%] md:object-[center_30%]",
  },
  {
    src: "/images/events/IMG_6379.jpg",
    alt: "Cantor Anna singing joyfully at the outdoor Hanukkah menorah lighting celebration",
    position: "object-[center_50%] sm:object-[center_45%] md:object-[center_40%]",
  },
  {
    src: "/images/events/IMG_9809.JPEG",
    alt: "Cantor Anna conducting the TBS choir during a spirited Shabbat service",
    position: "object-[center_45%] sm:object-[center_40%] md:object-[center_35%]",
  },
  {
    src: "/images/events/Tezza-6405.JPG",
    alt: "Cantor Anna smiling warmly with guitar surrounded by children",
    position: "object-[center_45%] sm:object-[center_35%] md:object-[center_30%]",
  },
  {
    src: "/images/community/6c35b0d5-57cf-48eb-ac7f-a526f10c9b8c.JPG",
    alt: "TBS community gathered by the lake for Tashlich with guitar player in a beautiful outdoor setting",
    position: "object-[center_50%] sm:object-[center_45%] md:object-[center_40%]",
  },
  {
    src: "/images/events/High holidays.JPG",
    alt: "Cantor Anna leading the choir in white robes during High Holiday services",
    position: "object-[center_45%] sm:object-[center_35%] md:object-[center_30%]",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      {SLIDES.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          className={`object-cover ${slide.position} transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
          sizes="100vw"
        />
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-28 sm:bottom-24 left-0 right-0 z-20 flex justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-white"
                : "w-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
