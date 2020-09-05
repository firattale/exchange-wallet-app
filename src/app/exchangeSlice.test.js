import reducer, { initialState, changeFirstCurrency, changeSecondCurrency, changeCurrencyRate, selectFirstCurrency, selectSecondCurrency, selectCurrencyRate, selectFirstSign, selectSecondSign } from "./exchangeSlice"

describe('exchangeSlice', () => {
    describe('reducer, actions and selectors', () => {
        it('should return the initial state on first run', () => {
            const nextState = initialState;
            const result = reducer(undefined, {});
            expect(result).toEqual(nextState);
        });

        it('should properly set the state when first currency changed', () => {
            const payload = { first: "USD", firstSign: "$" }
            reducer(initialState, changeFirstCurrency(payload));
            const rootState = { exchange: { firstCurrency: "USD", firstSign: "$" } };
            expect(selectFirstCurrency(rootState)).toEqual("USD");
            expect(selectFirstSign(rootState)).toEqual("$");
        });
        it('should properly set the state when second currency changed', () => {
            const payload = { second: "USD", secondSign: "$" }
            reducer(initialState, changeSecondCurrency(payload));
            const rootState = { exchange: { secondCurrency: "USD", secondSign: "$" } };
            expect(selectSecondCurrency(rootState)).toEqual("USD");
            expect(selectSecondSign(rootState)).toEqual("$");
        });
        it('should properly set the state when currency rate changed', () => {
            const payload = { currencyRate: "1.00" }
            reducer(initialState, changeCurrencyRate(payload));
            const rootState = { exchange: { currencyRate: "1.00" } };
            expect(selectCurrencyRate(rootState)).toEqual("1.00");
        });
    });
});