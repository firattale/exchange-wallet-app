import React from 'react';
import { mount } from 'enzyme';
import { ExchangeRates } from './ExchangeRates.react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "../../app/exchangeSlice"

describe('ExchangeRates', () => {
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
    const mockStore = createStore(reducer, mockAppState);
    mockStore.dispatch = jest.fn();
    const getWrapper = () => mount(
        <Provider store={mockStore}>
            <ExchangeRates />
        </Provider>
    );

    afterEach(() => {
        jest.clearAllMocks()
    });
    it('should render correctly in "debug" mode', () => {
        const wrapper = getWrapper();
        expect(wrapper).toMatchSnapshot();
    });

});