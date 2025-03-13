export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  specifications: {
    dpi: string;
    sensor: string;
    buttons: string;
    weight: string;
    connectivity: string;
  };
  images: string[];
  isHot?: boolean;
}