import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cart from "../../components/Cart";
import CartItem from "../../components/CartItem";
import { IProduct } from "../../models/IProduct";

export interface CartState {
  cartOpened: boolean;
  cartItems: IProduct[];
  cartTotal: Number;
  cartTax: Number;
}

const initialState: CartState = {
  cartOpened: false,
  cartItems: [],
  cartTotal: 0,
  cartTax: 0,
};

const calcTotalPrice = (items: IProduct[]) => {
  return items.reduce((sum, obj) => obj.price + sum, 0);
};

const calcTaxPrice = (cartTotal: Number) => {
  return (Number(cartTotal) / 100) * 5;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      state.cartItems.push({
        ...action.payload,
      });
      state.cartTotal = calcTotalPrice(state.cartItems);
      state.cartTax = calcTaxPrice(state.cartTotal);
    },
    cartShow: (state) => {
      state.cartOpened = true;
    },
    cartHide: (state) => {
      state.cartOpened = false;
    },
    removeItem: (state, action: PayloadAction<IProduct>) => {
      const nextCartItems=state.cartItems.filter(cartItems => cartItems.id !== action.payload.id)
      state.cartItems=nextCartItems
    }
    
  },
});

export default cartSlice.reducer;
export const { addItem, cartHide, cartShow, removeItem} = cartSlice.actions;
