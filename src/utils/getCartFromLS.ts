import { IProduct } from "../models/IProduct";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cartItems");
  const items = data ? JSON.parse(data) : [];

  return {
    cartItems: items as IProduct[],
    cartOpened: false,
    cartTotal: 0,
    cartTotalPrice: 0,
  };
};
