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
  price: 102,
  discount: {
    amount: 0,
    percentage: 0,
  },
  rating: 5,
},

  {
    id: 3,
    title: "Chechered Shirt",
    srcUrl: "/images/pic3.png",
    gallery: ["/images/pic3.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    srcUrl: "/images/pic4.png",
    gallery: ["/images/pic4.png", "/images/pic10.png", "/images/pic11.png"],
    price: 160,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
  },
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Vertical Striped Shirt",
    srcUrl: "/images/pic5.png",
    gallery: ["/images/pic5.png", "/images/pic10.png", "/images/pic11.png"],
    price: 232,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
  },
  {
    id: 6,
    title: "Courage Graphic T-shirt",
    srcUrl: "/images/pic6.png",
    gallery: ["/images/pic6.png", "/images/pic10.png", "/images/pic11.png"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
  },
  {
    id: 7,
    title: "Loose Fit Bermuda Shorts",
    srcUrl: "/images/pic7.png",
    gallery: ["/images/pic7.png"],
    price: 80,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.0,
  },
  {
    id: 8,
    title: "Faded Skinny Jeans",
    srcUrl: "/images/pic8.png",
    gallery: ["/images/pic8.png"],
    price: 210,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Polo with Contrast Trims",
    srcUrl: "/images/pic12.png",
    gallery: ["/images/pic12.png", "/images/pic10.png", "/images/pic11.png"],
    price: 242,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: "Gradient Graphic T-shirt",
    srcUrl: "/images/pic13.png",
    gallery: ["/images/pic13.png", "/images/pic10.png", "/images/pic11.png"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
  },
  {
    id: 14,
    title: "Polo with Tipping Details",
    srcUrl: "/images/pic14.png",
    gallery: ["/images/pic14.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: "Black Striped T-shirt",
    srcUrl: "/images/pic15.png",
    gallery: ["/images/pic15.png"],
    price: 150,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
  },
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
