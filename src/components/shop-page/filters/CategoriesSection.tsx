import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
type Category = {
  title: string;
  slug: string;
};
const categoriesData: Category[] = [
  {
    title: "Cup",
    slug: "/shop?category=cup",
  },
  {
    title: "Vase",
    slug: "/shop?category=vase",
  },
  {
    title: "Tutorial",
    slug: "/shop?category=tutorial",
  },
];
const CategoriesSection = () => {
  return (
    <div>
      <h3 className="font-bold text-black text-base mb-4">Product Type</h3>
      <div className="flex flex-col space-y-0.5 text-black/60">
        {categoriesData.map((category, idx) => (
          <Link
            key={idx}
            href={category.slug}
            className="flex items-center justify-between py-2"
          >
            {category.title} <MdKeyboardArrowRight />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CategoriesSection;
