import React from 'react'
import "./Wallet.css"
import { changeFirstAmount, selectFirstWalletError, changeSecondAmount } from '../../app/walletSlice.js';
import { changeFirstCurrency } from '../../app/exchangeSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'reactstrap'
import { currencySigns } from "../../constants";
import { decimalValidation, negativeValidation } from '../../helper';

// Making a generic Wallet component gets really messy, that's why I decided to use two wallets
export const FirstWallet = ({ currency, sign, secondCurrency, currencyRate, firstAmount }) => {
    const dispatch = useDispatch();
    const walletAmount = useSelector(state => state.wallet[currency].toFixed(2))
    const error = useSelector(selectFirstWalletError);
    const handleCurrencyChange = value => {
        dispatch(changeFirstCurrency({ first: value, firstSign: currencySigns[value] }));
        dispatch(changeFirstAmount({ firstAmount: "" }));
        dispatch(changeSecondAmount({ secondAmount: "" }));
    }

    const handleChange = (value) => {
        decimalValidation(value, dispatch)
        // negativeValidation(value, dispatch)
        dispatch(changeFirstAmount({ firstAmount: value }))
        dispatch(changeSecondAmount({ secondAmount: (value * currencyRate).toFixed(2) }))
    }

    return (
        <>
            <div className="wallet-container background" >
                <div className="d-flex flex-column justify-content-between h-100">
                    <div className="d-flex justify-content-between align-items-center">
                        <Input type="select" data-testid="wallet-select" name="select" className="wallet-currency background" defaultValue={currency} onChange={e => handleCurrencyChange(e.target.value)}>
                            <option>GBP</option>
                            <option>USD</option>
                            <option>EUR</option>
                        </Input>
                        <input type="number" data-testid="wallet-input-1" className="wallet-input" value={firstAmount} onChange={e => handleChange(e.target.value)} disabled={currency === secondCurrency} min="0" />
                    </div>
                    {error && <p className="wallet-error-message">{error}</p>}
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