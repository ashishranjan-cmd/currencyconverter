import React from 'react';
import { AmountInput } from '../AmountInput/AmountInput.jsx'
import { CurrencyDropdown } from '../CurrencyDropdown/CurrencyDropdown.jsx'

export default function InputForm() {
  return (
    <>
        <form className='input-form'>
            <CurrencyDropdown
                label="From" 
            />
            <AmountInput
                label="Amount"
                type="number"
            />
        </form>
    </>
  )
}

export { InputForm }
