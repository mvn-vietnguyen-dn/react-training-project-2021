import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../components/Product";

export interface ProductState {
  favouriteIds: number[];
}

const initialState: ProductState = {
  favouriteIds: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleFavouriteId: (state, action: PayloadAction<number>) => {
      const favouriteIndex = state.favouriteIds.findIndex(
        (id: number) => id === +action.payload
      );
      if (favouriteIndex !== -1) {
        state.favouriteIds.splice(favouriteIndex, 1);
      } else {
        state.favouriteIds = [...state.favouriteIds, action.payload];
      }
    },
    filterFavouriteIds: (state, action: PayloadAction<ProductProps[]>) => {
      const productIds = action.payload.map(
        (product: ProductProps) => product?.id
      );
      state.favouriteIds = state.favouriteIds.filter((id: number) =>
        productIds?.includes(id)
      );
    },
  },
});

export const { toggleFavouriteId, filterFavouriteIds } = productSlice.actions;
export default productSlice.reducer;
