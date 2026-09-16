"use client";
import { Product } from "@/types/product.types";
import Image from "next/image";
import React, { useState } from "react";

const PhotoSection = ({
  data,
  selected,
  setSelected,
}: {
  data: Product;
  selected: string;
  setSelected: (url: string) => void;
}) => {
  const [showAll, setShowAll] = useState(false);
  const gallery = data.gallery ?? [];
  // 默认最多显示5个缩略图
  const visible = showAll ? gallery : gallery.slice(0, 5);

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

      {/* 缩略图：横向排列在主图下方 */}
      {gallery.length > 0 && (
        <div className="flex items-center justify-center gap-3">
          {visible.map((photo, index) => (
            <button
              key={index}
              type="button"
              className="bg-[#F0EEED] rounded-[13px] w-full max-w-[100px] xl:max-w-[120px] aspect-square overflow-hidden"
              onClick={() => setSelected(photo)}
            >
              <Image
                src={photo}
                width={120}
                height={120}
                className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500"
                alt={data.title}
                priority
              />
            </button>
          ))}

          {/* 超过5个时显示 ... 点击展开全部 */}
          {gallery.length > 5 && !showAll && (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="w-full max-w-[100px] xl:max-w-[120px] aspect-square rounded-[13px] bg-[#F0EEED] flex items-center justify-center text-2xl font-bold text-black/50 hover:bg-black hover:text-white transition-all"
            >
              ...
            </button>
          )}
        </div>
      )}
    </div>
  );
};
export default PhotoSection;
