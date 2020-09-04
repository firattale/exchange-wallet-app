import { createSlice } from '@reduxjs/toolkit';

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    USD: 40.00,
    GBP: 50.00,
    EUR: 60.00,
    selectedAmount: "",
    firstWalletError: null
  },
  reducers: {
    changeSelectedAmount: (state, action) => {
      const { selectedAmount } = action.payload
      state.selectedAmount = selectedAmount;
    },
    checkFirstWalletError: (state, action) => {
      const { error } = action.payload
      state.firstWalletError = error;
    },
    updateWallet: (state, action) => {
      const { firstWalletType, firstAmount, secondWalletType, secondAmount } = action.payload
      state[firstWalletType] = firstAmount;
      state[secondWalletType] = secondAmount;
      state.selectedAmount = ""
    },

  },
});

export const { changeSelectedAmount, updateWallet, checkFirstWalletError } = walletSlice.actions;

export const selectedAmount = state => state.wallet.selectedAmount;
export const selectUsdWallet = state => state.wallet.usdWallet;
export const selectFirstWalletError = state => state.wallet.firstWalletError;

export default walletSlice.reducer;
