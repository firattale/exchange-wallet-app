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
import FirstWallet from '../Wallet/FirstWallet.react';
import SecondWallet from '../Wallet/SecondWallet.react';

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
      <div className="wallets-container">
        <FirstWallet currency={firstCurrency} secondCurrency={secondCurrency} sign={firstSign} />
        <SecondWallet currency={secondCurrency} firstSign={firstSign} secondSign={secondSign} selectedAmount={amount} currencyRate={currencyRate} />
      </div>
    </div>
  );
}

export default App;
