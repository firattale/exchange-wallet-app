import { API_URL } from '../constants';
import { changeCurrencyRate } from '../app/exchangeSlice';

export const getRates = (payload, dispatch) => {
  const { first, second } = payload
  const url = `${API_URL}/latest?base=${first}&symbols=${second}`;
  
  return fetch(url)
    .then(response => response.json())
    .then((res) => {
      if (res.error) {
        throw new Error("There is something wrong with your request. Please try again!")
      }
      dispatch(changeCurrencyRate(res.rates[second].toFixed(4)))
    })
    .catch(err => {
      alert(err)
    })
}
