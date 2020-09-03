import React from 'react'
import FirstWallet from '../Wallet/FirstWallet.react'
import SecondWallet from '../Wallet/SecondWallet.react'
const WalletContainer = ({ firstCurrency, secondCurrency, firstSign, secondSign, amount, currencyRate }) => {
    return (
        <div className="wallets-container">
            <FirstWallet currency={firstCurrency} sign={firstSign} />
            <SecondWallet currency={secondCurrency} firstSign={firstSign} secondSign={secondSign} amount={amount} currencyRate={currencyRate} />
        </div>
    )
}

export default WalletContainer;