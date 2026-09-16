"use client";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";

// 品牌条卖点（跑马灯连续滚动）
const brandNames = ["FREE SHIPPING", "HANDCRAFTED", "FAST DELIVERY"];

const Brands = () => {
  return (
    <div className="bg-black py-6 md:py-10 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 25s linear infinite;
        }
      `}</style>
      <div className="flex overflow-hidden">
        <div className="marquee-track flex shrink-0 whitespace-nowrap">
          {/* 复制两遍实现无缝循环滚动 */}
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0">
              {brandNames.map((brand, i) => (
                <span
                  key={i}
                  className={cn(
                    integralCF.className,
                    "text-white/90 text-xl md:text-2xl lg:text-3xl mx-10"
                  )}
                >
                  {brand}
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
