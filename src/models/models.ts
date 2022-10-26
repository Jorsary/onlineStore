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

export interface IProducts {
  count: number,
  items:IProduct[]
}

export interface CartProps {
  stateCart?: boolean;
  onOpenCart?: () => void;
  onCloseCart?: () => void;
}

export interface FavoritesState {
  favoritesItems: IProduct[]
}

export interface CartState {
  cartOpened: boolean;
  cartItems: IProduct[];
  cartTotal: number;
}
export interface ProductsState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
  category: string;
  sortBy: string;
  order: string;
  page: number,
  limit: number,
  count:number,
}

export interface CartItemProps {
  cartItem: IProduct;
}

export interface ProductProps {
  product: IProduct;
}
