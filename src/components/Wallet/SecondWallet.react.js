import React from 'react'
import "./Wallet.css"
import { useSelector } from 'react-redux';

const SecondWallet = ({ firstSign, currency, secondSign, amount, currencyRate }) => {
    const secondAmount = (amount * currencyRate).toFixed(2)
    const walletAmount = useSelector(state => state.wallet[currency].toFixed(2))

    const reversedCurrencyRate = (1 / currencyRate).toFixed(2)
    return <div className="wallet-container">
        <div className="d-flex flex-column justify-content-between h-100">
            <div className="d-flex justify-content-between">
                <div className="wallet-currency">{currency}</div>
                <div className="wallet-second-amount">{secondAmount > 0 && `+${secondAmount}`}</div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="wallet-pocket">You Have {secondSign}{walletAmount}</div>
                <div className="wallet-pocket">1{secondSign}={firstSign}{reversedCurrencyRate}</div>
            </div>
        </div>
    </div>
}


export default SecondWallet;