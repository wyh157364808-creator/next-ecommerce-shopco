"use client";
import React, { useState } from "react";
import PhotoSection from "./PhotoSection";
import { Product } from "@/types/product.types";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Rating from "@/components/ui/Rating";
import AddToCardSection from "./AddToCardSection";

const Header = ({ data }: { data: Product }) => {
  // 主图状态（型号选择和缩略图共用）
  const [selected, setSelected] = useState<string>(data.srcUrl);

  // 从图片路径提取型号名：/images/01-17/A06-179A.jpg → A06-179A
  const getModelName = (url: string) => {
    const fileName = url.split("/").pop() ?? "";
    return fileName.replace(/\.\w+$/, "");
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <PhotoSection
            data={data}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div>
          <h1
            className={cn([
              integralCF.className,
              "text-2xl md:text-[40px] md:leading-[40px] mb-3 md:mb-3.5 capitalize",
            ])}
          >
            {data.title}
          </h1>
          <div className="flex items-center mb-3 sm:mb-3.5">
            <Rating
              initialValue={data.rating}
              allowFraction
              SVGclassName="inline-block"
              emptyClassName="fill-gray-50"
              size={25}
              readonly
            />
            <span className="text-black text-xs sm:text-sm ml-[11px] sm:ml-[13px] pb-0.5 sm:pb-0">
              {data.rating.toFixed(1)}
              <span className="text-black/60">/5</span>
            </span>
          </div>
          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-5">
            {data.discount.percentage > 0 ? (
              <span className="font-bold text-black text-2xl sm:text-[32px]">
                {`$${Math.round(
                  data.price - (data.price * data.discount.percentage) / 100
                )}`}
              </span>
            ) : data.discount.amount > 0 ? (
              <span className="font-bold text-black text-2xl sm:text-[32px]">
                {`$${data.price - data.discount.amount}`}
              </span>
            ) : (
              <span className="font-bold text-black text-2xl sm:text-[32px]">
                ${data.price}
              </span>
            )}
            {data.discount.percentage > 0 && (
              <span className="font-bold text-black/40 line-through text-2xl sm:text-[32px]">
                ${data.price}
              </span>
            )}
            {data.discount.amount > 0 && (
              <span className="font-bold text-black/40 line-through text-2xl sm:text-[32px]">
                ${data.price}
              </span>
            )}
            {data.discount.percentage > 0 ? (
              <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
                {`-${data.discount.percentage}%`}
              </span>
            ) : (
              data.discount.amount > 0 && (
                <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
                  {`-$${data.discount.amount}`}
                </span>
              )
            )}
          </div>
          <p className="text-sm sm:text-base text-black/60 mb-5">
            Handmade ceramic flower coffee mug. Each piece is hand-thrown and
            painted by artisans, with hand-pinched floral details and
            food-safe underglaze. No two mugs are exactly alike.
          </p>
          <hr className="h-[1px] border-t-black/10 mb-5" />

          {/* ===== 型号选择器（替代 Select Colors / Choose Size） ===== */}
          <div>
            <p className="text-black/60 text-sm mb-3">Select Model</p>
            <div className="flex flex-wrap gap-2">
              {data.gallery.map((photo, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelected(photo)}
                  className={cn(
                    "px-4 py-2 rounded-full border text-sm font-medium transition-all",
                    selected === photo
                      ? "bg-black text-white border-black"
                      : "border-black/20 text-black/70 hover:border-black"
                  )}
                >
                  {getModelName(photo)}
                </button>
              ))}
            </div>
          </div>
          <hr className="hidden md:block h-[1px] border-t-black/10 my-5" />
          <AddToCardSection data={data} />
        </div>
      </div>
    </>
  );
};
export default Header;
