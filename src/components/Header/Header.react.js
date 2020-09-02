import React from 'react'
import './Header.css';
import ExchangeRates from '../ExchangeRates/ExchangeRates.react'

const Header = () => {
    return (
    <div className="header-container">
        <button className="header-button">Cancel</button>
        <ExchangeRates />
        <button className="header-button">Exchange</button>
    </div>
    )
}

export default Header;