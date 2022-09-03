import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../models/IProduct";





export const fetchProducts = createAsyncThunk<IProduct[], string>(
  "products/fetchAll",
  async function(category, thunkAPI) {
    try {
      const responce = await axios.get(
        "https://631381c3a8d3f673ffcc361c.mockapi.io/products${category}"
      );
      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить товары")
    }
  }
);

// "https://631381c3a8d3f673ffcc361c.mockapi.io/products"