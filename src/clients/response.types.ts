export type ProductsResponse = {
  // I left out the properties I didn't need for the sake of time
  categories: Category[];
  additionalNavOptions: [];
};

export type Category = {
  name: string;
  items?: Product[] | Category[];
};

type Product = {
  name: string;
  variants: ProductVariant[];
};

type ProductVariant = {
  name: string;
  imageAlt: string;
};
