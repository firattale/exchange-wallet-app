import { createSlice } from '@reduxjs/toolkit';
import getExchangeRates from '../api/api'

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

const getRates = (payload, dispatch) => {
  const { first, second } = payload
  getExchangeRates({ first, second })
    .then((res) => {
      dispatch(changeCurrencyRate(res.rates[second].toFixed(4)))
    }
    )
}
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const changeCurrencyRateAsync = (payload) => dispatch => {
  getRates(payload, dispatch);
  setInterval(() => {
    getRates(payload, dispatch);
  }, 10000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectFirstCurrency = state => state.exchange.firstCurrency;
export const selectSecondCurrency = state => state.exchange.secondCurrency;
export const selectCurrencyRate = state => state.exchange.currencyRate;
export const selectFirstSign = state => state.exchange.firstSign;
export const selectSecondSign = state => state.exchange.secondSign;

export default exchangeSlice.reducer;
