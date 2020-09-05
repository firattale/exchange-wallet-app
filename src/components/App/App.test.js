import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { useSelector } from 'react-redux';
import {
    selectFirstCurrency,
    selectSecondCurrency,
    selectFirstSign,
    selectSecondSign,
    selectCurrencyRate
} from '../../app/exchangeSlice';
import { selectFirstAmount } from '../../app/walletSlice.js';

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
}));
describe('App', () => {
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
    beforeEach(() => {
        useSelector.mockImplementation(callback => {
            return callback(mockAppState);
        });
    });
    afterEach(() => {
        useSelector.mockClear();
    });
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<App debug />);

        expect(component).toMatchSnapshot();
    });
    it('should call useSelector 6 times', () => {
        const component = shallow(<App debug />);
        expect(useSelector).toHaveBeenCalledTimes(6)
        expect(useSelector).toHaveBeenCalledWith(selectFirstCurrency)
        expect(useSelector).toHaveBeenCalledWith(selectSecondCurrency)
        expect(useSelector).toHaveBeenCalledWith(selectFirstSign)
        expect(useSelector).toHaveBeenCalledWith(selectSecondSign)
        expect(useSelector).toHaveBeenCalledWith(selectCurrencyRate)
        expect(useSelector).toHaveBeenCalledWith(selectFirstAmount)
    });
});