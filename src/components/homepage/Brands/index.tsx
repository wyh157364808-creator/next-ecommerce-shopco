"use client";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";

// 品牌条卖点
const brandNames = ["FREE SHIPPING", "HANDCRAFTED", "FAST DELIVERY"];

const Brands = () => {
  return (
    <div className="bg-black py-6 md:py-10 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
        }
      `}</style>
      <div className="flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center whitespace-nowrap">
          {/* 复制4份，循环点极稀疏，客户看不出拼接 */}
          {[0, 1, 2, 3].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {brandNames.map((brand) => (
                <span key={brand} className="flex items-center">
                  <span className="text-white/30 mx-6 md:mx-10 text-base md:text-xl">
                    ✦
                  </span>
                  <span
                    className={cn(
                      integralCF.className,
                      "text-white/90 text-xl md:text-2xl lg:text-3xl"
                    )}
                  >
                    {brand}
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
