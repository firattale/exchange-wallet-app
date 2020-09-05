import reducer, { initialState, changeFirstAmount, changeSecondAmount, checkFirstWalletError, updateWallet, selectFirstAmount, selectSecondAmount, selectFirstWalletError } from "./walletSlice"

describe('walletSlice', () => {
    describe('reducer, actions and selectors', () => {
        it('should return the initial state on first run', () => {
            const nextState = initialState;
            const result = reducer(undefined, {});
            expect(result).toEqual(nextState);
        });

        it('should properly set the state when first amount changed', () => {
            const payload = { firstAmount: "1.00" }
            const state = reducer(initialState, changeFirstAmount(payload));
            const rootState = { wallet: { firstAmount: "1.00" } };
            expect(state.firstAmount).toEqual("1.00");
            expect(selectFirstAmount(rootState)).toEqual("1.00");
        });
        it('should properly set the state when second amount changed', () => {
            const payload = { secondAmount: "2.00" }
            const state = reducer(initialState, changeSecondAmount(payload));
            const rootState = { wallet: { secondAmount: "2.1" } };
            expect(selectSecondAmount(rootState)).toEqual("2.1");
            expect(state.secondAmount).toEqual("2.00");
        });
        it('should properly set the state when error happens', () => {
            const payload = { error: "Error" }
            const state = reducer(initialState, checkFirstWalletError(payload));
            const rootState = { wallet: { firstWalletError: "Error" } };
            expect(selectFirstWalletError(rootState)).toEqual("Error");
            expect(state.firstWalletError).toEqual("Error");
        });
        it('should properly set the state when error happens', () => {
            const payload = {
                firstWalletType: "USD",
                secondWalletType: "GBP",
                firstAmount: "10.00",
                secondAmount: "20.00",
            }
            const state = reducer(initialState, updateWallet(payload));
            expect(state.USD).toEqual("10.00");
            expect(state.GBP).toEqual("20.00");
        });
    });
});