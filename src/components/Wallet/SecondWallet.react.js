import React from 'react'
import "./Wallet.css"
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'reactstrap'
import { changeSecondCurrency } from '../../app/exchangeSlice';
import { currencySigns } from "../../constants";

const SecondWallet = ({ firstSign, currency, secondSign, amount, currencyRate }) => {
    const dispatch = useDispatch();

    const secondAmount = (amount * currencyRate).toFixed(2)
    const walletAmount = useSelector(state => state.wallet[currency].toFixed(2))
    const handleCurrencyChange = value => {
        dispatch(changeSecondCurrency({ second: value, secondSign: currencySigns[value] }));
    }
    const reversedCurrencyRate = (1 / currencyRate).toFixed(2)
    return <div className="wallet-container">
        <div className="d-flex flex-column justify-content-between h-100">
            <div className="d-flex justify-content-between">
                {/* <div className="wallet-currency">{currency}</div> */}
                <Input type="select" name="select" className="wallet-currency-second" defaultValue={currency} onChange={e => handleCurrencyChange(e.target.value)}>
                    <option>GBP</option>
                    <option>USD</option>
                    <option>EUR</option>
                </Input>
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