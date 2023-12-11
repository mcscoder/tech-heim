import { AuthTypes } from ".";

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

export type ProductComment = AuthTypes.UserFullName & {
  description: string;
};

export interface Product {
  id: number;
  name: string;
  currentPrice: number;
  lastPrice: number | null;
  quantity: number;
  sold: number;
  rate: number;
  productImage: ProductImage[];
  productTechnical: ProductTechnical[];
  productGroup: Pick<ProductGroup, "title" | "productType">[];
  productComment: ProductComment[];
}

export type ProductCardResponseType = Pick<
  Product,
  "id" | "name" | "currentPrice" | "lastPrice" | "rate" | "productImage"
>;

export interface ProductType {
  id: number;
  title: string;
}

export interface ProductGroup {
  id: number;
  title: string;
  productType: ProductType[];
}
