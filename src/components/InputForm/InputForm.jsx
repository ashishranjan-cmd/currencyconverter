import React from 'react';
import { CurrencyDropdown } from '../CurrencyDropdown/CurrencyDropdown.jsx'
import { AmountInput } from '../AmountInput/AmountInput.jsx'
import { AmountOutput } from '../AmountOutput/AmountOutput.jsx'
import './InputForm.css'

export default function InputForm(props) {

    const {
        currencyOptions
    } = props
  return (
    <>
        <form className='input-form'>
            <CurrencyDropdown
                label="From"
                currencyOptions = { currencyOptions } 
            />
            <CurrencyDropdown
                label="To"
                currencyOptions = { currencyOptions } 
            />
            <AmountInput
                label="Amount"
                type="number"
            />
            <AmountOutput
                label="Exchanged Amount" 
            />
        </form>
    </>
  )
}

export { InputForm }
