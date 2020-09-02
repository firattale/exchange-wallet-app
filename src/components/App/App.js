import React from 'react';
import './App.css';
import Header from '../Header/Header.react'
import { useDispatch } from 'react-redux';
import { changeFirstCurrency } from '../../app/exchangeSlice';

const App = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(changeFirstCurrency({ first: "EUR", firstSign: "€" }));
  const handleClick2 = () => dispatch(changeFirstCurrency({ first: "USD", firstSign: "$" }));
  const handleClick3= () => dispatch(changeFirstCurrency({ first: "GBP", firstSign: "£" }));
  
  return (
    <div className="App">
      <Header />
      <button onClick={handleClick}>change EUR</button>
      <button onClick={handleClick2}>change USD</button>
      <button onClick={handleClick3}>change GBP</button>
    </div>
  );
}

export default App;
