import React from 'react';
import { mount } from 'enzyme';
import { Header } from './Header.react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "../../app/walletSlice"



describe('Header', () => {
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
        firstAmount: 50.00,
        firstCurrency: "GBP",
        secondCurrency: "USD",
        currencyRate: ""
    }

    const mockStore = createStore(reducer, mockAppState);
    mockStore.dispatch = jest.fn();
    const getWrapper = () => mount(
        <Provider store={mockStore}>
            <Header {...mockProps} />
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

        const wrapper = getWrapper();
        const input = wrapper.find('[data-testid="exchangeButton"]').at(1);
        input.simulate("click");
        expect(mockStore.dispatch).toHaveBeenCalledTimes(2);
        expect(mockStore.dispatch).toHaveBeenCalledWith({ "payload": { "firstAmount": 0, "firstWalletType": "GBP", "secondAmount": 40, "secondWalletType": "USD" }, "type": "wallet/updateWallet" });
    });

});