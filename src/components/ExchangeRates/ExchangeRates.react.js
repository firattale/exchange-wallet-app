import React, { useEffect } from 'react'
import './ExchangeRates.css';
import getExchangeRates from "../../api/api"

const ExchangeRates = (params) => {
    useEffect(() => {
        getExchangeRates({ first: "GBP", second: "USD" })
        setInterval(() => {
            console.log("aaaa")
        }, 1000);
    }, [])
    return <div className="exchange-container"><span className="currency">£</span>1= <span className="currency">$</span>1.4570</div>
}

export default ExchangeRates;