import { createSlice } from '@reduxjs/toolkit';
import { clearAllIntervals, getRates } from '../helper'

export const exchangeSlice = createSlice({
  name: 'exchange',
  initialState: {
    firstCurrency: "GBP",
    firstSign: "£",
    secondCurrency: "USD",
    currencyRate: "",
    secondSign: "$"
  },
  reducers: {
    changeFirstCurrency: (state, action) => {
      const { first, firstSign } = action.payload
      state.firstCurrency = first;
      state.firstSign = firstSign;
    },
    changeSecondCurrency: (state, action) => {
      state.firstCurrency = action.payload;
    },
    changeCurrencyRate: (state, action) => {
      state.currencyRate = action.payload;
    },
  },
});

export const { changeFirstCurrency, changeSecondCurrency, changeCurrencyRate } = exchangeSlice.actions;

export const changeCurrencyRateAsync = (payload) => dispatch => {
  clearAllIntervals()
  getRates(payload, dispatch);
  // setInterval(() => {
  //   getRates(payload, dispatch);
  // }, 10000);
};



export const selectFirstCurrency = state => state.exchange.firstCurrency;
export const selectSecondCurrency = state => state.exchange.secondCurrency;
export const selectCurrencyRate = state => state.exchange.currencyRate;
export const selectFirstSign = state => state.exchange.firstSign;
export const selectSecondSign = state => state.exchange.secondSign;

export default exchangeSlice.reducer;
