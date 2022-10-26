import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../models/models";

export const fetchProducts = createAsyncThunk<IProduct[], any>(
  "products/fetchAll",
  async function ({ category, sortBy, order, page, limit, search }, thunkAPI) {
    try {
      const responce = await axios.get(
        "https://631381c3a8d3f673ffcc361c.mockapi.io/products",
        {
          params: {
            page,
            limit,
            category,
            sortBy,
            order,
            search,
          },
        }
      );
      console.log(responce.request)
      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить товары");
    }
  }
);
