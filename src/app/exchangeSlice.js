import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  firstCurrency: "GBP",
  firstSign: "£",
  secondCurrency: "USD",
  currencyRate: "",
  secondSign: "$"
}
export const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    changeFirstCurrency: (state, action) => {
      const { first, firstSign } = action.payload
      state.firstCurrency = first;
      state.firstSign = firstSign;
    },
    changeSecondCurrency: (state, action) => {
      const { second, secondSign } = action.payload
      state.secondCurrency = second;
      state.secondSign = secondSign;
    },
    changeCurrencyRate: (state, action) => {
      state.currencyRate = action.payload;
    },
  },
});

export const { changeFirstCurrency, changeSecondCurrency, changeCurrencyRate } = exchangeSlice.actions;

export const selectFirstCurrency = state => state.exchange.firstCurrency;
export const selectSecondCurrency = state => state.exchange.secondCurrency;
export const selectCurrencyRate = state => state.exchange.currencyRate;
export const selectFirstSign = state => state.exchange.firstSign;
export const selectSecondSign = state => state.exchange.secondSign;

export default exchangeSlice.reducer;
