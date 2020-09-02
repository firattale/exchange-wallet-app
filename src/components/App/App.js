import React from 'react';
import './App.css';
import Header from '../Header/Header.react'
import { useDispatch } from 'react-redux';
import { changeFirstCurrency } from '../../app/exchangeSlice';

const App = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log("object")
    return dispatch(changeFirstCurrency({ first: "EUR", firstSign: "€" }));
  }

  return (
    <div className="App">
      <Header />
      <button onClick={handleClick}>change first currency</button>
    </div>
  );
}

export default App;
