import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  categoryFilter: "All"
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialValue,
  reducers: {
    filterCategory: (state,action) => {
      state.categoryFilter = action.payload
    }
  }
})

export default categoriesSlice.reducer;
export const { loadCategories } = categoriesSlice.actions;
export const { filterCategory } = categoriesSlice.actions;