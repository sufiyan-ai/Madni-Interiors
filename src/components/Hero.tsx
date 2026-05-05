"use client";

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent as ReactTouchEvent,
  WheelEvent as ReactWheelEvent,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  bgImageSrc: string;
  title?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaSrc,
  bgImageSrc,
  title,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const delta = e.deltaY * 0.0009;
        setScrollProgress((prev) => {
          const next = Math.min(Math.max(prev + delta, 0), 1);
          if (next >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
          else if (next < 0.75) setShowContent(false);
          return next;
        });
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const deltaY = touchStartY - e.touches[0].clientY;
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const delta = deltaY * (deltaY < 0 ? 0.008 : 0.005);
        setScrollProgress((prev) => {
          const next = Math.min(Math.max(prev + delta, 0), 1);
          if (next >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
          else if (next < 0.75) setShowContent(false);
          return next;
        });
        setTouchStartY(e.touches[0].clientY);
      }
    };

    const handleScroll = () => { if (!mediaFullyExpanded) window.scrollTo(0, 0); };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);
  const firstWord = title?.split(" ")[0] ?? "";
  const restOfTitle = title?.split(" ").slice(1).join(" ") ?? "";

  return (
    <div className="overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          {/* Background image — starts from bottom so the room top is visible as it zooms */}
          <motion.div
            className="absolute inset-0 z-0 h-full"
            style={{ opacity: 1 - scrollProgress }}
          >
            <Image
              src={bgImageSrc}
              alt="Hero background"
              fill
              priority
              loading="eager"
              sizes="100vw"
              className="object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-black/25" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              {/* Expanding media card */}
              <div
                className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0 0 60px rgba(0,0,0,0.35)",
                }}
              >
                <Image
                  src={mediaSrc}
                  alt="Featured interior"
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 95vw, 80vw"
                  className="object-cover object-bottom"
                />
                <motion.div
                  className="absolute inset-0 bg-black/50"
                  style={{ opacity: 0.7 - scrollProgress * 0.3 }}
                />

                {scrollToExpand && (
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                    <p
                      className="text-amber-200 font-medium text-sm md:text-base text-center whitespace-nowrap"
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  </div>
                )}
              </div>

              {/* Split title — Madni (Archivo Black) + Interiors (Playfair Display) */}
              <div
                className={`flex flex-col items-center justify-center text-center gap-1 md:gap-2 w-full relative z-10 ${textBlend ? "mix-blend-difference" : ""}`}
              >
                <h1
                  className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none"
                  style={{
                    transform: `translateX(-${textTranslateX}vw)`,
                    fontFamily: "var(--font-archivo), sans-serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Madni
                </h1>
                <h2
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-amber-300 leading-none tracking-wide italic"
                  style={{
                    transform: `translateX(${textTranslateX}vw)`,
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  Interiors
                </h2>
              </div>
            </div>

            {/* Below-the-fold content revealed after expand */}
            <motion.div
              className="flex flex-col w-full px-4 sm:px-8 py-10 md:px-16 lg:py-20 pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export function Hero() {
  return (
    <div id="home">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/hero-card.jpg"
        bgImageSrc="/hero-bg.jpg"
        title="Madni Interiors"
        scrollToExpand="↓ Scroll to explore our work"
      >
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center text-gray-800">
          <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-[#122419]">
            A Beautiful Interior is Not a Luxury,{" "}
            <em className="font-lora-italic">It&apos;s Your First Impression</em>
          </h3>
          <p className="font-lora-italic text-base sm:text-lg md:text-xl text-gray-500 mb-8 md:mb-10 max-w-xl">
            We design modern, functional spaces that reflect your lifestyle and speak before you do.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              href="https://wa.me/919137411893"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-white font-semibold rounded-sm hover:bg-amber-600 transition-colors text-center"
            >
              Get Free Consultation
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-amber-500 text-amber-500 font-semibold rounded-sm hover:bg-amber-50 transition-colors text-center"
            >
              View Projects
            </a>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
