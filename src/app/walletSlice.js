import { createSlice } from '@reduxjs/toolkit';

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    USD: 40.00,
    GBP: 50.00,
    EUR: 60.00,
    firstAmount: "",
    secondAmount: "",
    firstWalletError: null
  },
  reducers: {
    changeFirstAmount: (state, action) => {
      const { firstAmount } = action.payload
      state.firstAmount = firstAmount;
    },
    changeSecondAmount: (state, action) => {
      const { secondAmount } = action.payload
      state.secondAmount = secondAmount;
    },
    checkFirstWalletError: (state, action) => {
      const { error } = action.payload
      state.firstWalletError = error;
    },
    updateWallet: (state, action) => {
      const { firstWalletType, firstAmount, secondWalletType, secondAmount } = action.payload
      state[firstWalletType] = firstAmount;
      state[secondWalletType] = secondAmount;
      state.firstAmount = ""
      state.secondAmount = ""
    },

  },
});

export const { changeFirstAmount, changeSecondAmount, updateWallet, checkFirstWalletError } = walletSlice.actions;

export const selectFirstAmount = state => state.wallet.firstAmount;
export const selectSecondAmount = state => state.wallet.secondAmount;
export const selectFirstWalletError = state => state.wallet.firstWalletError;

export default walletSlice.reducer;
