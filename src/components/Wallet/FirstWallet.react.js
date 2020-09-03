import React from 'react'
import "./Wallet.css"
import { changeSelectedAmount, selectedAmount } from '../../app/walletSlice.js';
import { changeFirstCurrency } from '../../app/exchangeSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'reactstrap'
import { currencySigns } from "../../constants";

const FirstWallet = ({ currency, sign }) => {
    const dispatch = useDispatch();
    const walletAmount = useSelector(state => state.wallet[currency].toFixed(2))
    const amount = useSelector(selectedAmount);
    const handleCurrencyChange = value => {
        dispatch(changeFirstCurrency({ first: value, firstSign: currencySigns[value] }));
    }
    const handleChange = (value) => {
        dispatch(changeSelectedAmount({ selectedAmount: value }))
    }
    return (
        <>
            <div className="wallet-container background" >
                <div className="d-flex flex-column justify-content-between h-100">
                    <div className="d-flex justify-content-between">
                        <Input type="select" name="select" className="wallet-currency background" defaultValue={currency} onChange={e => handleCurrencyChange(e.target.value)}>
                            <option>GBP</option>
                            <option>USD</option>
                            <option>EUR</option>
                        </Input>
                        <input type="number" className="wallet-input" value={amount} onChange={e => handleChange(e.target.value)} />
                    </div>
                    <div>
                        <div className="wallet-pocket">You Have {sign}{walletAmount}</div>
                    </div>
                </div>
            </div>
            <div className="arrow-down"></div>
        </>
    )
}


export default FirstWallet;