import { configureStore } from '@reduxjs/toolkit';
import exchangeSlice from './exchangeSlice';

export default configureStore({
  reducer: {
    exchange: exchangeSlice,
  },
});
