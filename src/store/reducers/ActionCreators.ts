import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../models/IProduct";



export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products"
      );
      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить товары")
    }
  }
);
