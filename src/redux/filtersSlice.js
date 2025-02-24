import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    setFilterName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilterName } = filtersSlice.actions;

export const selectFilterName = (state) => state.filters.name;

export default filtersSlice.reducer;
