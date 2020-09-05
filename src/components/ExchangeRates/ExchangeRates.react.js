import React, { useEffect } from 'react'
import './ExchangeRates.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectFirstCurrency,
    selectSecondCurrency,
    selectCurrencyRate,
    selectFirstSign,
    selectSecondSign,
    changeCurrencyRateAsync
} from '../../app/exchangeSlice';

export const ExchangeRates = () => {
    const first = useSelector(selectFirstCurrency);
    const second = useSelector(selectSecondCurrency);
    const currencyRate = useSelector(selectCurrencyRate);
    const firstSign = useSelector(selectFirstSign);
    const secondSign = useSelector(selectSecondSign);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeCurrencyRateAsync({ first, second }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [first, second])
    return (
        <div className="exchange-container">
            <span className="currency">{firstSign}</span>
            1=
            <span className="currency">{secondSign}</span>
            {currencyRate.slice(0, 4)}
            <span className="currency">{currencyRate.slice(4, 6)}</span>
        </div>)
}

export default ExchangeRates;