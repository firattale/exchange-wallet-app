import { getRates } from "./api"


describe('getrates success', () => {
    it("finds exchange", async (done) => {
        const mockSuccessResponse = {
            rates: {
                EUR: 1.111111
            }
        };
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);


        window.alert = jest.fn();
        const dispatch = jest.fn()
        window.alert.mockClear();
        await getRates({ first: "GBP", second: "EUR" }, dispatch);
        expect.assertions(4);
        expect(global.fetch).toHaveBeenCalledWith('https://api.exchangeratesapi.io/latest?base=GBP&symbols=EUR');
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenCalledWith({ "payload": "1.1111", "type": "exchange/changeCurrencyRate" })
        global.fetch.mockClear();

        done();

    });
});

describe('getrates error', () => {

    it("finds exchange", async (done) => {
        const mockSuccessResponse = {
            error: "Error"
        };
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

        window.alert = jest.fn();
        const dispatch = jest.fn()
        window.alert.mockClear();

        expect.assertions(4);
        await getRates({ first: "GBP", second: "EUR" }, dispatch);
        expect(global.fetch).toHaveBeenCalledWith('https://api.exchangeratesapi.io/latest?base=GBP&symbols=EUR');
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledTimes(0)
        expect(getRates).toThrowError("Cannot destructure property `first` of 'undefined' or 'null'.");

        done();

    });
});