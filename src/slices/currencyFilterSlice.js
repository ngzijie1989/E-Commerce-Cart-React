import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  currencyFilter: JSON.stringify({ currency: 'SGD', multiplier: 1 })
}

export const currencyFilterSlice = createSlice({
  name: 'currencyFilter',
  initialState: initialValue,
  reducers: {
    filterCurrency: (state,action) => {
      state.currencyFilter = action.payload
    }
  }
})

export default currencyFilterSlice.reducer;
export const { filterCurrency } = currencyFilterSlice.actions;