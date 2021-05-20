export interface AnalogsTable {
  name: {
    productName: string;
    sku: string;
  };
  rating: {
    filledStars: Array<number>;
    outlinedStars?: Array<number>;
    reviews: number;
  };
  brand: {
    brandName: string;
    location: string;
  };
  price: number;
}
