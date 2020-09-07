import { decimalValidation, clearAllIntervals, changeCurrencyRateAsync } from './helper'

it('decimalValidation success', () => {
    const dispatch = jest.fn()
    decimalValidation("5", dispatch)
    expect(dispatch).toHaveBeenCalledWith({ "payload": { "error": null }, "type": "wallet/checkFirstWalletError" })
});
it('decimalValidation success', () => {
    const dispatch = jest.fn()
    decimalValidation("5.00", dispatch)
    expect(dispatch).toHaveBeenCalledWith({ "payload": { "error": null }, "type": "wallet/checkFirstWalletError" })
});
it('decimalValidation failure', () => {
    const dispatch = jest.fn()
    decimalValidation("5.00111", dispatch)
    expect(dispatch).toHaveBeenCalledWith({ "payload": { "error": "Your input must have only two digits after comma" }, "type": "wallet/checkFirstWalletError" })
});
it('clearAllIntervals ', () => {
    jest.useFakeTimers();
    clearAllIntervals()
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(clearTimeout).toHaveBeenCalledTimes(1)
});
it('changeCurrencyRateAsync ', () => {
    jest.useFakeTimers();
    changeCurrencyRateAsync("")(jest.fn())
    expect(setInterval).toHaveBeenCalledTimes(1)
});

