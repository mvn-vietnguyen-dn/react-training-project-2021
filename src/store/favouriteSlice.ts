import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FavouriteState {
  ids: number[]
}

const initialState: FavouriteState = {
  ids: [],
}

export const favouriteSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const favouriteIndex = state.ids.findIndex((id: number) => id === +action.payload);
      if (favouriteIndex !== -1) {
        state.ids.splice(favouriteIndex, 1);
      } else {
        state.ids = [...state.ids, action.payload];
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleFavourite } = favouriteSlice.actions

export default favouriteSlice.reducer