import React from 'react'
import "./Wallet.css"
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'reactstrap'
import { changeSecondCurrency } from '../../app/exchangeSlice';
import { changeFirstAmount, changeSecondAmount, selectSecondAmount } from '../../app/walletSlice';
import { currencySigns } from "../../constants";
import { inputValidation } from '../../helper/helper'

// Making a generic Wallet component gets really messy, that's why I decided to use two wallets
export const SecondWallet = ({ firstSign, firstCurrency, currency, secondSign, currencyRate }) => {
    const dispatch = useDispatch();
    const secondAmount = useSelector(selectSecondAmount);
    const reversedCurrencyRate = (1 / currencyRate).toFixed(2)
    const walletAmount = useSelector(state => state.wallet[currency].toFixed(2))
    const handleCurrencyChange = value => {
        dispatch(changeSecondCurrency({ second: value, secondSign: currencySigns[value] }));
        dispatch(changeFirstAmount({ firstAmount: "" }));
        dispatch(changeSecondAmount({ secondAmount: "" }));
    }
    const handleChange = (value) => {
        const calculatedAmount = value * (1 / currencyRate)
        inputValidation(value, dispatch)
        dispatch(changeFirstAmount({ firstAmount: calculatedAmount.toFixed(2) }))
        dispatch(changeSecondAmount({ secondAmount: value }))
    }
    return <div className="wallet-container">
        <div className="d-flex flex-column justify-content-between h-100">
            <div className="d-flex justify-content-between align-items-center">
                <Input type="select" data-testid="wallet-select" name="select" className="wallet-currency-second" defaultValue={currency} onChange={e => handleCurrencyChange(e.target.value)}>
                    <option>GBP</option>
                    <option>USD</option>
                    <option>EUR</option>
                </Input>
                <input type="number" data-testid="wallet-input-2" className="wallet-input-second" value={secondAmount} onChange={e => handleChange(e.target.value)} disabled={currency === firstCurrency} min="0" />

            </div>
            <div className="d-flex justify-content-between">
                <div className="wallet-pocket">You Have {secondSign}{walletAmount}</div>
                <div className="wallet-pocket">1{secondSign}={firstSign}{reversedCurrencyRate}</div>
            </div>
        </div>
    </div>
}


export default SecondWallet;