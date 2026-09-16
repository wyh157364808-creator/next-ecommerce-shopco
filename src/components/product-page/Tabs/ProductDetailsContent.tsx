"use client";
import { Product } from "@/types/product.types";
import Image from "next/image";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductDetailsContent = ({ data }: { data: Product }) => {
  const images = data.gallery ?? [];
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold mb-5">Product Details</h2>

      {images.length > 0 ? (
        <div className="flex items-center gap-2">
          {/* 左箭头（有2张以上图片就显示） */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="shrink-0 w-9 h-9 rounded-full border border-black/20 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all"
              aria-label="Previous details"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {/* 图片：手机一行1个，电脑一行4个 */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto flex-1"
            style={{ scrollbarWidth: "none" }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="shrink-0 w-full md:w-1/4 aspect-square bg-[#F0EEED] rounded-[13px] overflow-hidden"
              >
                <Image
                  src={img}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  alt={`${data.title} detail ${i + 1}`}
                />
              </div>
            ))}
          </div>

          {/* 右箭头 */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={() => scroll(1)}
              className="shrink-0 w-9 h-9 rounded-full border border-black/20 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all"
              aria-label="Next details"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      ) : (
        <p className="text-black/60">No detail images available.</p>
      )}
    </div>
  );
};
export default ProductDetailsContent;
