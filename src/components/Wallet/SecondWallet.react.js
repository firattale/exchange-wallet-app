import React from 'react'
import "./Wallet.css"

const SecondWallet = ({ currency, sign, amount, currencyRate }) => {
    return <div className="wallet-container background">
        <div className="d-flex flex-column justify-content-between h-100">
            <div className="d-flex justify-content-between">
                <div className="wallet-currency">{currency}</div>
                {amount * currencyRate}
            </div>
            <div>
                <div className="wallet-pocket">You Have {sign}50.00</div>
            </div>
        </div>
    </div>
}


export default SecondWallet;