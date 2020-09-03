import { configureStore } from '@reduxjs/toolkit';
import exchangeSlice from './exchangeSlice';
import walletSlice from './walletSlice';

export default configureStore({
  reducer: {
    exchange: exchangeSlice,
    wallet: walletSlice,
  },
});
