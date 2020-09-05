import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header.react';
import { useSelector, useDispatch } from 'react-redux';
import { updateWallet, selectFirstWalletError } from '../../app/walletSlice.js';


jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));
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
    beforeEach(() => {
        useSelector.mockImplementation(callback => {
            return callback(mockAppState);
        });
    });
    afterEach(() => {
        useSelector.mockClear();
    });
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Header debug {...mockProps} />);

        expect(component).toMatchSnapshot();
    });

    it('should call useSelector 5 times', () => {
        shallow(<Header {...mockProps}  />);
        expect(useSelector).toHaveBeenCalledTimes(3)
        expect(useDispatch).toHaveBeenCalledTimes(2)
        expect(useSelector).toHaveBeenCalledWith(selectFirstWalletError)
    
    });

});