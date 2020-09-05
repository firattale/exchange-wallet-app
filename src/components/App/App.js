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
import { selectFirstAmount } from '../../app/walletSlice.js';
import FirstWallet from '../Wallet/FirstWallet.react';
import SecondWallet from '../Wallet/SecondWallet.react';

export const App = () => {
  const firstCurrency = useSelector(selectFirstCurrency);
  const secondCurrency = useSelector(selectSecondCurrency);
  const firstSign = useSelector(selectFirstSign);
  const secondSign = useSelector(selectSecondSign);
  const firstAmount = useSelector(selectFirstAmount);
  const currencyRate = useSelector(selectCurrencyRate);

  return (
    <div className="h-100 w-100">
      <Header firstAmount={firstAmount} firstCurrency={firstCurrency} secondCurrency={secondCurrency} currencyRate={currencyRate} />
      <div className="wallets-container">
        <FirstWallet currency={firstCurrency} firstAmount={firstAmount} secondCurrency={secondCurrency} sign={firstSign} currencyRate={currencyRate} />
        <SecondWallet currency={secondCurrency} firstCurrency={firstCurrency} firstSign={firstSign} secondSign={secondSign} currencyRate={currencyRate} />
      </div>
    </div>
  );
}

export default App;
