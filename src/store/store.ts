import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductSlice";
import cartReducer from "./reducers/CartSlice";
const rootReducer = combineReducers({
  products:productReducer,
  cart:cartReducer
});

export const store =
    configureStore({
    reducer: rootReducer,
  });


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
