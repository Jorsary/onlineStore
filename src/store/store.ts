import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductSlice";
import cartReducer from "./reducers/CartSlice";
import filterReducer from "./reducers/FilterSlice";
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
