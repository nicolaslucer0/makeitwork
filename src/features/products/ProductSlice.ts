import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../models/Product";
import { RootState } from "../../store";

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    remove: (state) => {
      state.products = [];
    },
    clear: (state) => {
      state.products = [];
    },
  },
});

export const { add, remove, clear } = productsSlice.actions;
export const productList = (state: RootState) => state.products;
export default productsSlice.reducer;
