import React from 'react'
import './Header.css';
import ExchangeRates from '../ExchangeRates/ExchangeRates.react'
import { Button } from 'reactstrap';
import { updateWallet, selectFirstWalletError } from '../../app/walletSlice.js';
import { useSelector, useDispatch } from 'react-redux';

export const Header = ({ firstAmount, firstCurrency, secondCurrency, currencyRate }) => {
    const firstWalletAmount = useSelector(state => state.wallet[firstCurrency].toFixed(2));
    const secondWalletAmount = useSelector(state => state.wallet[secondCurrency].toFixed(2));
    const error = useSelector(selectFirstWalletError);

    const isDisabled = Boolean(+firstAmount > firstWalletAmount || firstAmount === "" || firstCurrency === secondCurrency || error);
    const dispatch = useDispatch();

    const handleExchange = () => {
        dispatch(updateWallet({
            firstWalletType: firstCurrency,
            secondWalletType: secondCurrency,
            firstAmount: +firstWalletAmount - firstAmount,
            secondAmount: +secondWalletAmount +(firstAmount * currencyRate),
        }))
    }
    return (
        <div className="header-container">
            <Button type="button" className="header-button">Cancel</Button>
            <ExchangeRates />
            <Button type="button" data-testid="exchangeButton" className="header-button" disabled={isDisabled} onClick={handleExchange} >Exchange</Button>
        </div>
    )
}

export default Header;