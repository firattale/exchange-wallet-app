import React from 'react'
import './Header.css';
import ExchangeRates from '../ExchangeRates/ExchangeRates.react'
import { Button } from 'reactstrap';
import { updateWallet, selectFirstWalletError } from '../../app/walletSlice.js';
import { useSelector, useDispatch } from 'react-redux';

const Header = ({ selectedAmount, firstCurrency, secondCurrency, currencyRate }) => {
    const firstWalletAmount = useSelector(state => state.wallet[firstCurrency].toFixed(2));
    const secondWalletAmount = useSelector(state => state.wallet[secondCurrency].toFixed(2));
    const error = useSelector(selectFirstWalletError);

    const isDisabled = +selectedAmount > firstWalletAmount || selectedAmount === "" || firstCurrency === secondCurrency || error;
    const dispatch = useDispatch();

    const handleExchange = () => {
        dispatch(updateWallet({
            firstWalletType: firstCurrency,
            secondWalletType: secondCurrency,
            firstAmount: +firstWalletAmount - selectedAmount,
            secondAmount: +secondWalletAmount + +(selectedAmount * currencyRate).toFixed(2),
        }))
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