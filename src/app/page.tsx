import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "Handmade Flower Coffee Mug",
    srcUrl: "/images/01-17/A06-179A.jpg",
    gallery: [
      "/images/01-17/A06-179A.jpg",
      "/images/01-17/A06-179B.jpg",
      "/images/01-17/A06-179C.jpg",
      "/images/01-17/A06-179D.jpg",
      "/images/01-17/A06-179E.jpg",
      "/images/01-17/A06-179F.jpg",
    ],
    detailImages: [
      "/images/01-17/detail/detail-1.jpg",
      "/images/01-17/detail/detail-2.jpg",
      "/images/01-17/detail/detail-3.jpg",
      "/images/01-17/detail/detail-4.jpg",
      "/images/01-17/detail/detail-5.jpg",
      "/images/01-17/detail/detail-6.jpg",
    ],
    category: "cup", // 杯子
    price: 102,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 5.0,
  },
  {
    id: 2,
    title: "Handmade Flower Coffee Mug 01-18",
    srcUrl: "/images/01-18/A06-186-2A.jpg",
    gallery: [
      "/images/01-18/A06-186-2A.jpg",
      "/images/01-18/A06-186B.jpg",
      "/images/01-18/A06-186C-2A.jpg",
      "/images/01-18/A06-186D-2A.jpg",
      "/images/01-18/A06-186E-2A.jpg",
      "/images/01-18/A06-186F-2A.jpg",
      "/images/01-18/A06-186G-2A.jpg",
      "/images/01-18/A06-186H-2A.jpg",
      "/images/01-18/A06-189A-2A.jpg",
      "/images/01-18/A06-189B-2A.jpg",
    ],
    detailImages: [
      "/images/01-18/detail/detail-10.jpg",
      "/images/01-18/detail/detail-11.jpg",
      "/images/01-18/detail/detail-12.jpg",
      "/images/01-18/detail/detail-13.jpg",
      "/images/01-18/detail/detail-14.jpg",
      "/images/01-18/detail/detail-15.jpg",
    ],
    category: "cup", // 杯子
    price: 102,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 5,
  },
  {
    id: 3,
    title: "Handmade Porcelain Flower Vase 01-19",
    srcUrl: "/images/01-19/A06-190A.jpg",
    gallery: [
      "/images/01-19/A06-190A.jpg",
      "/images/01-19/A06-190B.jpg",
      "/images/01-19/A06-198A.jpg",
      "/images/01-19/A06-198B.jpg",
      "/images/01-19/A06-198C.jpg",
      "/images/01-19/A06-198D.jpg",
      "/images/01-19/A06-198E.jpg",
      "/images/01-19/A06-198F.jpg",
      "/images/01-19/A06-198G.jpg",
      "/images/01-19/A06-199A.jpg",
      "/images/01-19/A06-199B.jpg",
      "/images/01-19/A06-199C.jpg"
    ],
    detailImages: [
      "/images/01-19/detail/detail-20.jpg",
      "/images/01-19/detail/detail-21.jpg",
      "/images/01-19/detail/detail-22.jpg",
      "/images/01-19/detail/detail-23.jpg"
    ],
    category: "vase", //❗这里修正！01-19是花瓶，原来写cup错了
    price: 102,
    discount: {
      amount: 0,
      percentage: 0
    },
    rating: 5,
  },
  {
    id: 4,
    title: "Handmade Porcelain Flower Cup 01-20",
    srcUrl: "/images/01-20/A06-203A.jpg",
    gallery: [
      "/images/01-20/A06-203A.jpg",
      "/images/01-20/A06-206A.jpg",
      "/images/01-20/A06-206B.jpg",
      "/images/01-20/A06-206C.jpg",
      "/images/01-20/A06-207A.jpg",
      "/images/01-20/A06-207B.jpg",
      "/images/01-20/A06-207C.jpg",
      "/images/01-20/A06-207D.jpg",
      "/images/01-20/A06-208A.jpg",
      "/images/01-20/A06-208B.jpg"
    ],
    detailImages: [
      "/images/01-20/detail/detail-30.jpg",
      "/images/01-20/detail/detail-31.jpg",
      "/images/01-20/detail/detail-32.jpg",
      "/images/01-20/detail/detail-33.jpg",
      "/images/01-20/detail/detail-34.jpg",
      "/images/01-20/detail/detail-35.jpg"
    ],
    category: "cup", // 杯子
    price: 102,
    discount: {
      amount: 0,
      percentage: 0
    },
    rating: 5
  },
   {
    id: 5,
    title: "Hand-Pinched Porcelain Floral Cup 01-21",
    srcUrl: "/images/01-21/A06-210A.jpg",
    gallery: [
      "/images/01-21/A06-210A.jpg",
      "/images/01-21/A06-210B.jpg",
      "/images/01-21/A06-210C.jpg",
      "/images/01-21/A06-211A.jpg",
    ],
    detailImages: [
      "/images/01-21/detail/detail-40.jpg",
      "/images/01-21/detail/detail-41.jpg",
      "/images/01-21/detail/detail-42.jpg",
      "/images/01-21/detail/detail-43.jpg",
      "/images/01-21/detail/detail-44.jpg",
    ],
    category: "cup", // 杯子
    price: 102,
    discount: {
      amount: 0,
      percentage: 0
    },
    rating: 5
  },
   {
    id: 6,
    title: "Handmade Porcelain Blossom Coffee Cup 01-22",
    srcUrl: "/images/01-22/A06-223A.jpg",
    gallery: [
       "/images/01-22/A06-223A.jpg",
       "/images/01-22/A06-223C.jpg",
       "/images/01-22/A06-223D.jpg",
       "/images/01-22/A06-223E.jpg",
       "/images/01-22/A06-223F.jpg",
       "/images/01-22/A06-226A.jpg",
    ],
    detailImages: [
      "/images/01-22/detail/detail-50.jpg",
      "/images/01-22/detail/detail-51.jpg",
      "/images/01-22/detail/detail-52.jpg",
      "/images/01-22/detail/detail-53.jpg",
      "/images/01-22/detail/detail-54.jpg",
    ],
    category: "cup", // 杯子
    price: 102,
    discount: {
      amount: 0,
      percentage: 0
    },
    rating: 5
  },
   {
    id: 7,
    title: "Artisan Porcelain Flower Tea Cup 01-21-1",
    srcUrl: "/images/01-22-1/A06-227A.jpg",
    gallery: [
       "/images/01-22-1/A06-227A.jpg",
       "/images/01-22-1/A06-227B.jpg",
       "/images/01-22-1/A06-227C.jpg",
       "/images/01-22-1/A06-227D.jpg",
       "/images/01-22-1/A06-227F.jpg",
       "/images/01-22-1/A06-227G.jpg",
       "/images/01-22-1/A06-227H.jpg",
       "/images/01-22-1/A06-227J.jpg",
       "/images/01-22-1/A06-227K.jpg",
    ],
    detailImages: [
      "/images/01-21-1/detail/detail-60.jpg",
      "/images/01-21-1/detail/detail-61.jpg",
      "/images/01-21-1/detail/detail-62.jpg",
      "/images/01-21-1/detail/detail-63.jpg",
      "/images/01-21-1/detail/detail-64.jpg",
    ],
    category: "cup", // 杯子
    price: 102,
    discount: {
      amount: 0,
      percentage: 0
    },
    rating: 5
  }
];

// ✅ topSellingData 清空模板T恤，放你的爆款产品
export const topSellingData: Product[] = [
  // 后续新增产品放这里，现在先空着也可以
];

// ✅ relatedProductData 清空模板T恤（这个数组给详情页YOU MIGHT ALSO LIKE使用）
export const relatedProductData: Product[] = [
  // 这里不用填，详情页我们已经写了随机取全部产品，这个数组现在清空
];

export const reviewsData: Review[] = [];

export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="NEW ARRIVALS"
          data={newArrivalsData}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="top selling"
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
