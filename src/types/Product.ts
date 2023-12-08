export type SearchParamKeys = "categoryId" | "productTypeId" | "sort";

export type SortTypes = "ascending" | "descending";

export interface SearchParamTypes {
  categoryId?: string;
  productTypeId?: string;
  sort?: SortTypes;
}

export interface ProductImage {
  imageURL: string;
}

export interface ProductTechnical {
  title: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  currentPrice: number;
  lastPrice: number | null;
  quantity: number;
  sold: number;
  productImage: ProductImage[];
  productTechnical: ProductTechnical[];
}
