import React from 'react';
import './App.css';
import Header from '../Header/Header.react'
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFirstCurrency,
  selectSecondCurrency,
  selectFirstSign,
  selectSecondSign,
  changeFirstCurrency,
  selectCurrencyRate
} from '../../app/exchangeSlice';
import { selectedAmount } from '../../app/walletSlice.js';
import WalletContainer from '../WalletContainer/WalletContainer.react';

const App = () => {
  const firstCurrency = useSelector(selectFirstCurrency);
  const secondCurrency = useSelector(selectSecondCurrency);
  const firstSign = useSelector(selectFirstSign);
  const secondSign = useSelector(selectSecondSign);
  const amount = useSelector(selectedAmount);
  const currencyRate = useSelector(selectCurrencyRate);

  const dispatch = useDispatch();
  const handleClick = () => dispatch(changeFirstCurrency({ first: "EUR", firstSign: "€" }));
  const handleClick2 = () => dispatch(changeFirstCurrency({ first: "USD", firstSign: "$" }));
  const handleClick3 = () => dispatch(changeFirstCurrency({ first: "GBP", firstSign: "£" }));

  return (
    <div className="h-100 w-100">
      <Header selectedAmount={amount} firstCurrency={firstCurrency} secondCurrency={secondCurrency} currencyRate={currencyRate} />
      <WalletContainer firstCurrency={firstCurrency} firstSign={firstSign} secondCurrency={secondCurrency} secondSign={secondSign} amount={amount} currencyRate={currencyRate} />
      {/* <button onClick={handleClick}>change EUR</button>
      <button onClick={handleClick2}>change USD</button>
      <button onClick={handleClick3}>change GBP</button> */}
    </div>
  );
}

export default App;
