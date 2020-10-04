import { inputValidation, clearAllIntervals, changeCurrencyRateAsync } from './helper'

it('inputValidation success', () => {
    const dispatch = jest.fn()
    inputValidation("5", dispatch)
    expect(dispatch).toHaveBeenCalledWith({ "payload": { "error": null }, "type": "wallet/checkFirstWalletError" })
});
it('inputValidation success', () => {
    const dispatch = jest.fn()
    inputValidation("5.11", dispatch)
    expect(dispatch).toHaveBeenCalledWith({ "payload": { "error": null }, "type": "wallet/checkFirstWalletError" })
});
it('inputValidation failure', () => {
    const dispatch = jest.fn()
    inputValidation("5.00111", dispatch)
    expect(dispatch).toHaveBeenCalledWith({ "payload": { "error": "Your input must have only two digits after comma" }, "type": "wallet/checkFirstWalletError" })
});
it('inputValidation failure', () => {
    const dispatch = jest.fn()
    inputValidation("-5", dispatch)
    expect(dispatch).toHaveBeenCalledWith({ "payload": { "error": "Your input must be a positive number" }, "type": "wallet/checkFirstWalletError" })
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

