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
    category: "cup", // 杯子套装
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
  },
    {
    id: 8,
    title: "Handmade Porcelain Flower Cup 01-23",
    srcUrl: "/images/01-23/A06-236A.jpg",
    gallery: [
      "/images/01-23/A06-236A.jpg",
      "/images/01-23/A06-236B.jpg",
      "/images/01-23/A06-236C.jpg",
      "/images/01-23/A06-236D.jpg",
      "/images/01-23/A06-236E.jpg",
      "/images/01-23/A06-237A.jpg",
      "/images/01-23/A06-238B.jpg",
      "/images/01-23/A06-238C.jpg",
    ],
    detailImages: [
      "/images/01-23/detail/detail-70.jpg",
      "/images/01-23/detail/detail-71.jpg",
      "/images/01-23/detail/detail-72.jpg",
      "/images/01-23/detail/detail-73.jpg",
      "/images/01-23/detail/detail-74.jpg",
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
    id: 9,
    title: "Handcrafted Porcelain Flower Tea Cup 01-24",
    srcUrl: "/images/01-24/A06-243A.jpg",
    gallery: [
      "/images/01-24/A06-243A.jpg",
      "/images/01-24/A06-243B.jpg",
      "/images/01-24/A06-243C.jpg",
      "/images/01-24/A06-244A.jpg",
      "/images/01-24/A06-244B.jpg",
      "/images/01-24/A06-244C.jpg",
      "/images/01-24/A06-244D.jpg",
      "/images/01-24/A06-246A.jpg",
      "/images/01-24/A06-246B.jpg",
      "/images/01-24/A06-246C.jpg",
      "/images/01-24/A06-249A.jpg",
    ],
    detailImages: [
      "/images/01-24/detail/detail-80.jpg",
      "/images/01-24/detail/detail-81.jpg",
      "/images/01-24/detail/detail-82.jpg",
      "/images/01-24/detail/detail-83.jpg",
      "/images/01-24/detail/detail-84.jpg",
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
    id: 10,
    title: "Handcrafted Porcelain Best Friend Cup 01-25",
    srcUrl: "/images/01-25-couple/A06-253-2A.jpg",
    gallery: [
      "/images/01-25-couple/A06-253-2A.jpg",
    ],
    detailImages: [
      "/images/01-25-couple/detail/detail-101.jpg",
      "/images/01-25-couple/detail/detail-102.jpg",
      "/images/01-25-couple/detail/detail-103.jpg",
      "/images/01-25-couple/detail/detail-104.jpg",
      "/images/01-25-couple/detail/detail-105.jpg",
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
    id: 11,
    title: "Handcrafted Porcelain Flower Cup 01-25",
    srcUrl: "/images/01-25/A06-250A.jpg",
    gallery: [
      "/images/01-25/A06-250A.jpg",
      "/images/01-25/A06-250B.jpg",
    ],
    detailImages: [
      "/images/01-25/detail/detail-90.jpg",
      "/images/01-25/detail/detail-91.jpg",
      "/images/01-25/detail/detail-92.jpg",
      "/images/01-25/detail/detail-93.jpg",
      "/images/01-25/detail/detail-94.jpg",
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
    id: 12,
    title: "Handcrafted Porcelain Flower Cup 01-27",
    srcUrl: "/images/01-27/A06-271A.jpg",
    gallery: [
      "/images/01-27/A06-271A.jpg",
      "/images/01-27/A06-272A.jpg",
      "/images/01-27/A06-272B.jpg",
      "/images/01-27/A06-272C.jpg",
      "/images/01-27/A06-272D.jpg",
    ],
    detailImages: [
      "/images/01-27/detail/detail-110.jpg",
      "/images/01-27/detail/detail-111.jpg",
      "/images/01-27/detail/detail-112.jpg",
      "/images/01-27/detail/detail-113.jpg",
      "/images/01-27/detail/detail-114.jpg",
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
    id: 13,
    title: "Handcrafted Porcelain Flower Cup 01-29",
    srcUrl: "/images/01-29/A06-291A.jpg",
    gallery: [
      "/images/01-29/A06-291A.jpg",
      "/images/01-29/A06-291B.jpg",
      "/images/01-29/A06-291C.jpg",
      "/images/01-29/A06-294A.jpg",
      "/images/01-29/A06-294B.jpg",
      "/images/01-29/A06-294C.jpg",
      "/images/01-29/A06-295A.jpg",
    ],
    detailImages: [
      "/images/01-29/detail/detail-120.jpg",
      "/images/01-29/detail/detail-121.jpg",
      "/images/01-29/detail/detail-122.jpg",
      "/images/01-29/detail/detail-123.jpg",
      "/images/01-29/detail/detail-124.jpg",
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
    id: 14,
    title: "Handcrafted Porcelain Flower Cup 01-30",
    srcUrl: "/images/01-30/A06-302A.jpg",
    gallery: [
      "/images/01-30/A06-302A.jpg",
      "/images/01-30/A06-302B.jpg",
      "/images/01-30/A06-303A.jpg",
      "/images/01-30/A06-303B.jpg",
      "/images/01-30/A06-303C.jpg",
      "/images/01-30/A06-303D.jpg",
    ],
    detailImages: [
      "/images/01-30/detail/detail-130.jpg",
      "/images/01-30/detail/detail-131.jpg",
      "/images/01-30/detail/detail-132.jpg",
      "/images/01-30/detail/detail-133.jpg",
      "/images/01-30/detail/detail-134.jpg",
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
    id: 15,
    title: "Handcrafted Porcelain Cup Set 01-31",
    srcUrl: "/images/01-31/KA26-281-3A.jpg",
    gallery: [
      "/images/01-31/KA26-281-3A.jpg",
      "/images/01-31/KA26-281-5A.jpg",
    ],
    detailImages: [
      "/images/01-31/detail/detail-200.jpg",
      "/images/01-31/detail/detail-201.jpg",
      "/images/01-31/detail/detail-202.jpg",
      "/images/01-31/detail/detail-203.jpg",
      "/images/01-31/detail/detail-204.jpg",
    ],
    category: "cup", // 杯子套装
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
  {
    id: 16,
    title: "Handmade Porcelain Flower Vase 50",
    srcUrl: "/images/50/KA26-135A-2A.jpg",
    gallery: [
      "/images/50/KA26-135A-2A.jpg",
      "/images/50/KA26-245A-2A.jpg",
      "/images/50/KA26-245B-2A.jpg",
      "/images/50/KA26-245C-2A.jpg",
      "/images/50/KA26-245D-2A.jpg",
    ],
    detailImages: [
      "/images/50/detail/detail-300.jpg",
      "/images/50/detail/detail-301.jpg",
      "/images/50/detail/detail-302.jpg",
      "/images/50/detail/detail-303.jpg",
    ],
    category: "vase",
    price: 220,
    discount: {
      amount: 0,
      percentage: 0
    },
    rating: 5
  },
  {
    id: 17,
    title: "Handmade Porcelain Flower Vase 51",
    srcUrl: "/images/51/A26-014A.jpg",
    gallery: [
      "/images/51/A26-014A.jpg",
    ],
    detailImages: [
      "/images/51/detail/detail-400.jpg",
      "/images/51/detail/detail-401.jpg",
      "/images/51/detail/detail-402.jpg",
      "/images/51/detail/detail-403.jpg",
    ],
    category: "vase",
    price: 458,
    discount: {
      amount: 0,
      percentage: 0
    },
    rating: 5
  },
  {
    id: 18,
    title: "Handmade Porcelain Flower Vase 52",
    srcUrl: "/images/52/A26-040B.jpg",
    gallery: [
      "/images/52/A26-040B.jpg",
      "/images/52/A26-040C.jpg",
      "/images/52/A26-040D.jpg",
      "/images/52/A26-040E.jpg",
    ],
    detailImages: [
      "/images/52/detail/detail-500.jpg",
      "/images/52/detail/detail-501.jpg",
    ],
    category: "vase",
    price: 240,
    discount: {
      amount: 0,
      percentage: 0
    },
    rating: 5
  }
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
          title="Fresh Flower Cups"
          data={newArrivalsData}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="Chinese Minimalist Porcelain Vases"
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

