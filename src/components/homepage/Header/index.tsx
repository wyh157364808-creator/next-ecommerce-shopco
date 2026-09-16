"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ========== 轮播图数据（图片已上传到 public/images/hero/） ==========
const heroSlides = [
  {
    image: "/images/hero/1.png",
    alt: "Handmade ceramic vase",
    title: "FIND HANDCRAFTED CERAMICS THAT MATCH YOUR STYLE",
    description: "Browse our carefully hand-thrown pottery collection, unique ceramic art for tea lovers.",
  },
  {
    image: "/images/hero/2.png",
    alt: "Jianzhan tea cup",
    title: "UNIQUE CERAMIC ART FOR TEA LOVERS",
    description: "Each piece is hand-thrown and glazed by artists, no two pieces are exactly alike.",
  },
  {
    image: "/images/hero/3.png",
    alt: "Pottery collection",
    title: "EVERY PIECE IS MADE BY HAND",
    description: "Support independent pottery artists and bring one-of-a-kind ceramics to your home.",
  },
];

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  // 自动轮播，每4秒切换一张
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setActiveIndex((index + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[activeIndex];

  return (
    <section className="bg-[#F2F0F1]">
      <div className="max-w-frame mx-auto px-4 xl:px-0 py-8 md:py-16">
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-10">
          {/* 左侧文字（随轮播变化） */}
          <div className="order-2 md:order-1">
            <h1
              className={cn(
                integralCF.className,
                "text-[32px] md:text-[48px] lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8 break-words"
              )}
            >
              {slide.title}
            </h1>
            <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">
              {slide.description}
            </p>
            <Link
              href="/shop"
              className="w-full md:w-52 inline-block text-center bg-black text-white hover:bg-black/80 transition-all px-10 py-3.5 rounded-full"
            >
              Shop Now
            </Link>

            {/* 统计数字 */}
            <div className="flex items-center gap-6 md:gap-10 mt-8 md:mt-12">
              <div>
                <p className="font-bold text-2xl md:text-3xl">80+</p>
                <p className="text-xs md:text-sm text-black/60">Handcrafted Series</p>
              </div>
              <div className="h-10 w-px bg-black/10" />
              <div>
                <p className="font-bold text-2xl md:text-3xl">500+</p>
                <p className="text-xs md:text-sm text-black/60">Handmade Works</p>
              </div>
              <div className="h-10 w-px bg-black/10 hidden sm:block" />
              <div className="hidden sm:block">
                <p className="font-bold text-2xl md:text-3xl">1200+</p>
                <p className="text-xs md:text-sm text-black/60">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* 右侧轮播图片 */}
          <div className="order-1 md:order-2 relative">
            <div className="relative aspect-square overflow-hidden rounded-[20px]">
              {heroSlides.map((s, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-700",
                    idx === activeIndex ? "opacity-100" : "opacity-0"
                  )}
                >
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* 左右切换箭头 */}
            <button
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* 底部圆点指示器 */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    idx === activeIndex ? "w-8 bg-black" : "w-3 bg-black/30"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
