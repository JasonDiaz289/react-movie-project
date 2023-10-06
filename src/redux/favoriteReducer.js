import { createSlice } from "@reduxjs/toolkit";
import { memoize } from "proxy-memoize";

export const favoritesSlice = createSlice({
  name: "favorite",
  initialState: {
    value: {},
  },
  reducers: {
    add: (state, action) => {
      state.value[action.payload.id] = action.payload;
    },
    remove: (state, action) => {
      const { id } = action.payload;
      const nextState = { ...state };
      delete nextState.value[id];
      state = nextState;
    },
  },
});

export const { add, remove } = favoritesSlice.actions;
export const selectFavorites = memoize((state) =>
  Object.values(state.favorites.value)
);
export default favoritesSlice.reducer;
