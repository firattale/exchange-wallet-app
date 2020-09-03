import React from 'react'
import "./Wallet.css"
import { changeSelectedAmount } from '../../app/walletSlice.js';
import { useSelector, useDispatch } from 'react-redux';

const FirstWallet = ({ currency, sign }) => {
    const dispatch = useDispatch();
    const walletAmount = useSelector(state => state.wallet[currency].toFixed(2))
    const handleChange = (value) => {
        dispatch(changeSelectedAmount({ selectedAmount: value }))
    }
    return (
        <>
            <div className="wallet-container background" >
                <div className="d-flex flex-column justify-content-between h-100">
                    <div className="d-flex justify-content-between">
                        <div className="wallet-currency">{currency}</div>
                        <input type="number" className="wallet-input" onChange={e => handleChange(e.target.value)} />
                    </div>
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