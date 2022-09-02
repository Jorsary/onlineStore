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



const calcTaxPrice = (cartTotal: Number) => {
  return (Number(cartTotal) / 100) * 5;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex] = {
          ...state.cartItems[itemIndex],
          cartQuantity: state.cartItems[itemIndex].cartQuantity + 1,
         
        };
        
        
      } else {
        let tempProduct = {
          ...action.payload,
          cartQuantity: 1,
        };
        state.cartItems.push(tempProduct);
        
      }
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
      }
    },
    removeItem: (state, action: PayloadAction<IProduct>) => {
      const nextCartItems = state.cartItems.filter(
        (cartItems) => cartItems.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
    },

    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotal = quantity;
      state.cartTax = total;
    },

    cartShow: (state) => {
      state.cartOpened = true;
    },
    cartHide: (state) => {
      state.cartOpened = false;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, cartHide, cartShow, removeItem, decreaseCart,getTotals } =
  cartSlice.actions;
