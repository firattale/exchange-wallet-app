import { checkFirstWalletError } from '../app/walletSlice';
import { getRates } from '../api/api'

export const clearAllIntervals = () => {
    // eslint-disable-next-line no-implied-eval
    const highestTimeoutId = setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
    }
}

export const inputValidation = (value, dispatch) => {
    if (!Number.isInteger(Number(value))) {
        let count = value.split(".")[1].length || 0;
        if (count < 3) {
            dispatch(checkFirstWalletError({ error: null }))
        }

        else {
            dispatch(checkFirstWalletError({ error: "Your input must have only two digits after comma" }))
        }
    } else if (Number(value) < 0) {
        dispatch(checkFirstWalletError({ error: "Your input must be a positive number" }))
    }
    else {
        dispatch(checkFirstWalletError({ error: null }))
    }
}


export const changeCurrencyRateAsync = (payload) => dispatch => {
    clearAllIntervals()
    getRates(payload, dispatch);
    setInterval(() => {
        getRates(payload, dispatch);
    }, 10000);
};

const exportFunctions = {
    clearAllIntervals,
    inputValidation,
    changeCurrencyRateAsync
};
export default exportFunctions;
