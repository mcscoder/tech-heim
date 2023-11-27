export type SearchParamKeys = "categoryId" | "productTypeId" | "sort";

export type SortTypes = "ascending" | "descending";

export interface SearchParamTypes {
  categoryId?: string;
  productTypeId?: string;
  sort?: SortTypes;
}
