import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageCategory = () => {
  const category = window.localStorage.getItem('category')
  if (category) {
    return category;
  } else {
    window.localStorage.setItem('category', 'All');
  }
}

const initialValue = {
  categoryFilter: getLocalStorageCategory()
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialValue,
  reducers: {
    filterCategory: (state,action) => {
      state.categoryFilter = action.payload
      // const category = window.localStorage.getItem('category')
      // if (category) {
      window.localStorage.setItem('category', action.payload)
      // }
    }
  }
})

export default categoriesSlice.reducer;
export const { loadCategories } = categoriesSlice.actions;
export const { filterCategory } = categoriesSlice.actions;