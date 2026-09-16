"use client";
import { Product } from "@/types/product.types";
import Image from "next/image";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PhotoSection = ({
  data,
  selected,
  setSelected,
}: {
  data: Product;
  selected: string;
  setSelected: (url: string) => void;
}) => {
  const gallery = data.gallery ?? [];
  const scrollRef = useRef<HTMLDivElement>(null);

  // 点击箭头左右滑动缩略图
  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 140, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col">
      {/* 主图 */}
      <div className="flex items-center justify-center bg-[#F0EEED] rounded-[13px] sm:rounded-[20px] w-full h-full max-h-[530px] min-h-[330px] lg:min-h-[380px] xl:min-h-[530px] overflow-hidden mb-3">
        <Image
          src={selected}
          width={444}
          height={530}
          className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500"
          alt={data.title}
          priority
          unoptimized
        />
      </div>

      {/* 缩略图：横向滑动 + 左右箭头 */}
      {gallery.length > 0 && (
        <div className="flex items-center gap-2">
          {/* 左箭头 */}
          <button
            type="button"
            onClick={() => scroll(-1)}
            className="shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full border border-black/20 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all"
            aria-label="Previous thumbnails"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* 缩略图横排（可滑动） */}
          <div
            ref={scrollRef}
            className="flex gap-2.5 md:gap-3 overflow-x-auto flex-1"
            style={{ scrollbarWidth: "none" }}
          >
            {gallery.map((photo, index) => (
              <button
                key={index}
                type="button"
                className="shrink-0 bg-[#F0EEED] rounded-[13px] w-[76px] h-[76px] md:w-[100px] md:h-[100px] overflow-hidden"
                onClick={() => setSelected(photo)}
              >
                <Image
                  src={photo}
                  width={100}
                  height={100}
                  className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500"
                  alt={data.title}
                  priority
                />
              </button>
            ))}
          </div>

          {/* 右箭头 */}
          <button
            type="button"
            onClick={() => scroll(1)}
            className="shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full border border-black/20 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all"
            aria-label="Next thumbnails"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
export default PhotoSection;
