import { API_URL } from '../constants';

// latest?base=USD&symbols=RON,USD

const getExchangeRates = ({ first, second }) => {
  const url = `${API_URL}/latest?base=TRY&symbols=USD,GBP`;
  console.log('url', url);
  return fetch(url).then(response => response.json());
};
export default getExchangeRates;
