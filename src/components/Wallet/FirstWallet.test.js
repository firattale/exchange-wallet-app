import React from 'react';
import { mount } from 'enzyme';
import { FirstWallet } from './FirstWallet.react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "../../app/walletSlice"

describe('FirstWallet', () => {
    const mockAppState = {
        exchange: {
            firstCurrency: "GBP",
            firstSign: "£",
            secondCurrency: "USD",
            currencyRate: "",
            secondSign: "$"
        },
        wallet: {
            USD: 40.00,
            GBP: 50.00,
            EUR: 60.00,
            firstAmount: "",
            secondAmount: "",
            firstWalletError: null
        }
    }
    const mockProps = {
        sign: "£",
        firstAmount: 50.00,
        currency: "GBP",
        secondCurrency: "USD",
        currencyRate: ""
    }
    const mockStore = createStore(reducer, mockAppState);
    mockStore.dispatch = jest.fn();
    const getWrapper = () => mount(
        <Provider store={mockStore}>
            <FirstWallet {...mockProps} />
        </Provider>
    );

    afterEach(() => {
        jest.clearAllMocks()
    });


    it('should render correctly in "debug" mode', () => {
        const wrapper = getWrapper();
        expect(wrapper).toMatchSnapshot();
    });

    it('should call dispatch func when  number inputs change', () => {
        const event = {
            target: {
                value: 1.00
            }
        }
        const wrapper = getWrapper();
        const input = wrapper.find('[data-testid="wallet-input-1"]');
        input.simulate("change", event);
        expect(mockStore.dispatch).toHaveBeenCalledTimes(3);
        expect(mockStore.dispatch).toHaveBeenCalledWith({ "payload": { "error": null }, "type": "wallet/checkFirstWalletError" });
        expect(mockStore.dispatch).toHaveBeenCalledWith({ "payload": { "firstAmount": 1 }, "type": "wallet/changeFirstAmount" });
        expect(mockStore.dispatch).toHaveBeenCalledWith({ "payload": { "secondAmount": "0.00" }, "type": "wallet/changeSecondAmount" });
    });
    it('should call dispatch func when select inputs change', () => {
        const event = {
            target: {
                value: "USD"
            }
        }
        const wrapper = getWrapper();
        const input = wrapper.find('[data-testid="wallet-select"]').at(0);
        input.simulate("change", event);
        expect(mockStore.dispatch).toHaveBeenCalledTimes(3);
        expect(mockStore.dispatch).toHaveBeenCalledWith({ "payload": { "first": "USD", "firstSign": "$" }, "type": "exchange/changeFirstCurrency" });
        expect(mockStore.dispatch).toHaveBeenCalledWith({ "payload": { "firstAmount": "" }, "type": "wallet/changeFirstAmount" });
        expect(mockStore.dispatch).toHaveBeenCalledWith({ "payload": { "secondAmount": "" }, "type": "wallet/changeSecondAmount" });

    });

});