import React from 'react'
import './Header.css';
import ExchangeRates from '../ExchangeRates/ExchangeRates.react'
import { Button } from 'reactstrap';
import { updateWallet } from '../../app/walletSlice.js';
import { useSelector, useDispatch } from 'react-redux';

const Header = ({ amount, firstCurrency, secondCurrency, currencyRate }) => {
    const firstWalletAmount = useSelector(state => state.wallet[firstCurrency].toFixed(2))
    const secondWalletAmount = useSelector(state => state.wallet[secondCurrency].toFixed(2))
    const isDisabled = +amount > firstWalletAmount
    const dispatch = useDispatch();

    const handleExchange = () => {
        dispatch(updateWallet({
            firstWalletType: firstCurrency,
            secondWalletType: secondCurrency,
            firstAmount: +firstWalletAmount - amount,
            secondAmount: +secondWalletAmount + +(amount * currencyRate).toFixed(2)
        }))
        console.log('firstCurrency', firstCurrency)
        console.log('firstWalletAmount', +firstWalletAmount - amount)
        console.log('secondCurrency', secondCurrency)
        console.log('firstAmount', typeof +amount)
        console.log("second", typeof +(amount * currencyRate).toFixed(2))
    }
    return (
        <div className="header-container">
            <Button type="button" className="header-button">Cancel</Button>
            <ExchangeRates />
            <Button type="button" className="header-button" disabled={isDisabled} onClick={handleExchange} >Exchange</Button>
        </div>
    )
}

export default Header;