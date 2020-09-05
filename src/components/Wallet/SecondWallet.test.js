import React from 'react';
import { shallow } from 'enzyme';
import { SecondWallet } from './SecondWallet.react';
import { useSelector, useDispatch } from 'react-redux';
import { updateWallet, selectSecondAmount } from '../../app/walletSlice.js';


jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));
describe('SecondWallet', () => {
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
    beforeEach(() => {
        useSelector.mockImplementation(callback => {
            return callback(mockAppState);
        });
    });
    afterEach(() => {
        useSelector.mockClear();
    });
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<SecondWallet debug {...mockProps} />);

        expect(component).toMatchSnapshot();
    });

    it('should call useSelector 5 times', () => {
        shallow(<SecondWallet {...mockProps}  />);
        expect(useSelector).toHaveBeenCalledTimes(2)
        expect(useDispatch).toHaveBeenCalledTimes(2)
        expect(useSelector).toHaveBeenCalledWith(selectSecondAmount)
    
    });

});