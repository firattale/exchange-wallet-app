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
import {
  selectedAmount,
  selectUsdWallet
} from '../../app/walletSlice.js';
import WalletContainer from '../WalletContainer/WalletContainer.react';

const App = () => {
  const first = useSelector(selectFirstCurrency);
  const second = useSelector(selectSecondCurrency);
  const firstSign = useSelector(selectFirstSign);
  const secondSign = useSelector(selectSecondSign);
  const amount = useSelector(selectedAmount);
  const currencyRate = useSelector(selectCurrencyRate);
  const usdWallet = useSelector(selectUsdWallet);

  const dispatch = useDispatch();
  const handleClick = () => dispatch(changeFirstCurrency({ first: "EUR", firstSign: "€" }));
  const handleClick2 = () => dispatch(changeFirstCurrency({ first: "USD", firstSign: "$" }));
  const handleClick3 = () => dispatch(changeFirstCurrency({ first: "GBP", firstSign: "£" }));

  return (
    <div className="h-100 w-100">
      <Header amount={amount} wallet={usdWallet} />
      <WalletContainer firstCurrency={first} firstSign={firstSign} secondCurrency={second} secondSign={secondSign} amount={amount} currencyRate={currencyRate} />
      {/* <button onClick={handleClick}>change EUR</button>
      <button onClick={handleClick2}>change USD</button>
      <button onClick={handleClick3}>change GBP</button> */}
    </div>
  );
}

export default App;
