import { createSlice } from '@reduxjs/toolkit';

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    usdWallet: 50.00,
    poundWallet: 50.00,
    eurWallet: 50.00,
    selectedAmount: 0,
    secondSign: "$"
  },
  reducers: {
    changeSelectedAmount: (state, action) => {
      const { selectedAmount } = action.payload
      state.selectedAmount = selectedAmount;
    },
    changeSecondCurrency: (state, action) => {
      state.firstCurrency = action.payload;
    },
    changeCurrencyRate: (state, action) => {
      state.currencyRate = action.payload;
    },
  },
});

export const { changeSelectedAmount, changeSecondCurrency, changeCurrencyRate } = walletSlice.actions;

export const selectedAmount = state => state.wallet.selectedAmount;
export const selectUsdWallet = state => state.wallet.usdWallet;

export default walletSlice.reducer;
