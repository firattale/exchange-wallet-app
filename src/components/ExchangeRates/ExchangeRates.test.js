import React from 'react';
import { shallow } from 'enzyme';
import { ExchangeRates } from './ExchangeRates.react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectFirstCurrency,
    selectSecondCurrency,
    selectCurrencyRate,
    selectFirstSign,
    selectSecondSign,
    changeCurrencyRateAsync
} from '../../app/exchangeSlice';

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));
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
    beforeEach(() => {
        useSelector.mockImplementation(callback => {
            return callback(mockAppState);
        });
    });
    afterEach(() => {
        useSelector.mockClear();
    });
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<ExchangeRates debug />);

        expect(component).toMatchSnapshot();
    });

    it('should call useSelector 5 times', () => {
        shallow(<ExchangeRates debug />);
        expect(useSelector).toHaveBeenCalledTimes(5)
        expect(useDispatch).toHaveBeenCalledTimes(2)
        expect(useSelector).toHaveBeenCalledWith(selectFirstCurrency)
        expect(useSelector).toHaveBeenCalledWith(selectSecondCurrency)
        expect(useSelector).toHaveBeenCalledWith(selectFirstSign)
        expect(useSelector).toHaveBeenCalledWith(selectSecondSign)
        expect(useSelector).toHaveBeenCalledWith(selectCurrencyRate)
    });
 
});