import React, { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { InputForm } from './components/InputForm/InputForm.jsx'
import './App.css'

const Base_URL = 'https://api.exchangerate.host/latest';

export default function App() {

  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()

  useEffect(() => {
    (async () => {
      await fetch(Base_URL)
      .then(res => res.json())
      //.then(data => console.log(data))
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]) //destructured the objects
        setFromCurrency(data.base)
        setToCurrency(firstCurrency) 
      })
    })();
  }, [])

  return (
    <div className='main'>
      <div className='container' id='panel'>
        <Header />
        <InputForm 
            currencyOptions = { currencyOptions }
            selectedFromCurrency = { fromCurrency }
            selectedToCurrency = { toCurrency}
        />
      </div>
    </div>
  )
}
