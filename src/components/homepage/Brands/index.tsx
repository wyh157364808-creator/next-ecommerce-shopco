"use client";
import { useEffect, useState } from "react";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";

// 品牌条卖点（缓慢轮播）
const brandNames = [
  "FREE SHIPPING",
  "HANDCRAFTED",
  "FAST DELIVERY",
];

const Brands = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // 缓慢轮播：每4秒切换一个卖点
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brandNames.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black py-6 md:py-10 overflow-hidden">
      <div className="max-w-frame mx-auto px-4 xl:px-0 relative h-8 md:h-10 flex items-center justify-center">
        {brandNames.map((brand, idx) => (
          <span
            key={brand}
            className={cn(
              integralCF.className,
              "absolute text-white/90 text-xl md:text-2xl lg:text-3xl transition-opacity duration-1000",
              idx === activeIndex ? "opacity-100" : "opacity-0"
            )}
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Brands;
