import getExchangeRates from './api/api'
import { changeCurrencyRate } from './app/exchangeSlice'

export const clearAllIntervals = () => {
    const highestTimeoutId = setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
    }
}

export const getRates = (payload, dispatch) => {
    const { first, second } = payload
    getExchangeRates({ first, second })
        .then((res) => {
            dispatch(changeCurrencyRate(res.rates[second].toFixed(4)))
        }
        )
}