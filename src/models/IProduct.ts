import { ReactNode } from "react";

export interface IProduct {
  cartQuantity: number;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartProps {
  stateCart?: boolean;
  onOpenCart?: () => void;
  onCloseCart?: () => void;
}
