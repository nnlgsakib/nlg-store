export interface Product {
  id: string;
  name: string;
  category: string;
  consensusType: string;
  chainType: string;
  description: string;
  basePrice: number;
  additionalOptions?: {
    name: string;
    price: number;
  }[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedOptions: string[];
}