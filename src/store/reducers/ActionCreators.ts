import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../models/IProduct";



export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get<IProduct[]>(
        "https://run.mocky.io/v3/a1c42a2a-2546-4d1e-b2ec-56c0164c1d61"
      );
      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить товары")
    }
  }
);
