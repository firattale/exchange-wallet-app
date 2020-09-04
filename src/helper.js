import { checkFirstWalletError } from './app/walletSlice';

export const clearAllIntervals = () => {
    const highestTimeoutId = setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
    }
}

export const decimalValidation = (value, dispatch) => {
    if (!Number.isInteger(Number(value))) {
        let count = value.split(".")[1].length || 0;
        if (count < 3) {
            dispatch(checkFirstWalletError({ error: null }))
        } else {
            dispatch(checkFirstWalletError({ error: "Your input must have only two digits after comma" }))
        }
    } else {
        dispatch(checkFirstWalletError({ error: null }))
    }

}


