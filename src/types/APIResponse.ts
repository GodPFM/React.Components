export interface Item {
  price: number;
  images: Array<string>;
  title: string;
  sold: number;
  category: string;
  brand: string;
  article: number;
  description: string;
  stock: number;
  id: string;
  updatedAt: string;
}
export interface Category {
  id: number;
  name: string;
  image: string;
}
