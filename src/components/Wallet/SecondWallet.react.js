import React from 'react'
import "./Wallet.css"

const SecondWallet = ({ currency, sign, amount, currencyRate }) => {
    const secondAmount = (amount * currencyRate).toFixed(2)
    return <div className="wallet-container">
        <div className="d-flex flex-column justify-content-between h-100">
            <div className="d-flex justify-content-between">
                <div className="wallet-currency">{currency}</div>
                <div className="wallet-second-amount">{secondAmount > 0 && `+${secondAmount}`}</div>
            </div>
            <div>
                <div className="wallet-pocket">You Have {sign}50.00</div>
            </div>
        </div>
    </div>
}


export default SecondWallet;