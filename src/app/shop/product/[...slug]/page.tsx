import {
  newArrivalsData,
  relatedProductData,
  topSellingData,
} from "@/app/page";
import ProductListSec from "@/components/common/ProductListSec";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header";
import Tabs from "@/components/product-page/Tabs";
import { Product } from "@/types/product.types";
import { notFound } from "next/navigation";
const data: Product[] = [
  ...newArrivalsData,
  ...topSellingData,
  ...relatedProductData,
];
export default function ProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const productData = data.find(
    (product) => product.id === Number(params.slug[0])
  );
  if (!productData?.title) {
    notFound();
  }

  // ========= 新增随机推荐逻辑 =========
  const relatedProducts = [...data]
    .filter(item => item.id !== productData.id) // 排除当前查看产品
    .sort(() => Math.random() - 0.5) // 随机打乱
    .slice(0,4); // 只取4个
  // =====================================

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbProduct title={productData?.title ?? "product"} />
        <section className="mb-11">
          <Header data={productData} />
        </section>
       <Tabs data={productData} />
      </div>
      <div className="mb-[50px] sm:mb-20">
        {/* 这里由原来的 relatedProductData 改成我们生成的 relatedProducts */}
        <ProductListSec title="You might also like" data={relatedProducts} />
      </div>
    </main>
  );
}
