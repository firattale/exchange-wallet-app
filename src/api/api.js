import { API_URL } from '../constants';

const getExchangeRates = ({ first, second }) => {
  const url = `${API_URL}/latest?base=${first}&symbols=${second}`;
  return fetch(url).then(response => response.json());
};
export default getExchangeRates;
