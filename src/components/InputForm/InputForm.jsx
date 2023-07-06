import React from 'react';
import { CurrencyDropdown } from '../CurrencyDropdown/CurrencyDropdown.jsx'
import { AmountInput } from '../AmountInput/AmountInput.jsx'
import { AmountOutput } from '../AmountOutput/AmountOutput.jsx'
import './InputForm.css'

export default function InputForm() {
  return (
    <>
        <form className='input-form'>
            <CurrencyDropdown
                label="From" 
            />
            <CurrencyDropdown
                label="To" 
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
