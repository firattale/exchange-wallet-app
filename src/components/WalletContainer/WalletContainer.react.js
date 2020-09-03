import React from 'react'
import FirstWallet from '../Wallet/FirstWallet.react'
import SecondWallet from '../Wallet/SecondWallet.react'
const WalletContainer = ({ firstCurrency, secondCurrency, firstSign, secondSign, amount, currencyRate }) => {
    return (
        <div className="">
            <FirstWallet currency={firstCurrency} sign={firstSign} />
            <SecondWallet currency={secondCurrency} sign={secondSign} amount={amount} currencyRate={currencyRate} />
        </div>
    )
}

export default WalletContainer;