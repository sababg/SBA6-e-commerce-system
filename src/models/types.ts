export interface Data {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimension;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Reviews[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  thumbnail: string;
  images: string[];
}

interface Dimension {
  width: number;
  height: number;
  depth: number;
}

interface Reviews {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}
