import React from 'react'
import './Header.css';
import ExchangeRates from '../ExchangeRates/ExchangeRates.react'
import { Button } from 'reactstrap';

const Header = ({ amount, wallet }) => {
    console.log('amount', amount)
    console.log('wallet', wallet)
    const isDisabled = (Number(amount) > wallet)
    console.log('isDisabled', isDisabled)
    return (
        <div className="header-container">
            <Button type="button" className="header-button">Cancel</Button>
            <ExchangeRates />
            <Button type="button" className="header-button" disabled={isDisabled}>Exchange</Button>
        </div>
    )
}

export default Header;