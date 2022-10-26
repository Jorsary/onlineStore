import { IProduct } from "../models/models";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cartItems");
  const items = data ? JSON.parse(data) : [];

  return {
    cartItems: items as IProduct[],
    cartOpened: false,
    cartTotal: 0,
  };
};

export const getFavoritesFromLS = () => {
  const data = localStorage.getItem("favoritesItems");
  const items = data ? JSON.parse(data) : [];

  return {
    favoritesItems: items as IProduct[]
  };
};
