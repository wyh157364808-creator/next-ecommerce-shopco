export type Discount = {
  amount: number;
  percentage: number;
};
export type Product = {
  id: number;
  title: string;
  srcUrl: string;
  gallery?: string[];
  detailImages?: string[];
  price: number;
  discount: Discount;
  rating: number;
};
