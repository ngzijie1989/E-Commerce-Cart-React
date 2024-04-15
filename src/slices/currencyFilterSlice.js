import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageCurrency = () => {
  const currency = window.localStorage.getItem('currency')
  if (currency) {
    return currency;
  } else {
    window.localStorage.setItem('currency', { currency: 'SGD', multiplier: 1 });
  }
}

const initialValue = {
  currencyFilter: getLocalStorageCurrency()
}

export const currencyFilterSlice = createSlice({
  name: 'currencyFilter',
  initialState: initialValue,
  reducers: {
    filterCurrency: (state,action) => {
      state.currencyFilter = action.payload
      window.localStorage.setItem('currency', action.payload)
    }
  }
})

export default currencyFilterSlice.reducer;
export const { filterCurrency } = currencyFilterSlice.actions;