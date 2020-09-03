import React from 'react';
import './App.css';
import Header from '../Header/Header.react'
import { useSelector } from 'react-redux';
import {
  selectFirstCurrency,
  selectSecondCurrency,
  selectFirstSign,
  selectSecondSign,
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

  return (
    <div className="h-100 w-100">
      <Header selectedAmount={amount} firstCurrency={firstCurrency} secondCurrency={secondCurrency} currencyRate={currencyRate} />
      <WalletContainer firstCurrency={firstCurrency} firstSign={firstSign} secondCurrency={secondCurrency} secondSign={secondSign} amount={amount} currencyRate={currencyRate} />
    </div>
  );
}

export default App;
