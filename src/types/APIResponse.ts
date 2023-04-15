export interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  creationAt: string;
  updatedAt: string;
  category: Category;
  images?: string[] | null;
}
export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt?: string;
  updatedAt?: string;
}
