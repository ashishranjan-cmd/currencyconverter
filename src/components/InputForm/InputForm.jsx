import React from 'react';
import { CurrencyDropdown } from '../CurrencyDropdown/CurrencyDropdown.jsx'
import { AmountInput } from '../AmountInput/AmountInput.jsx'
import { AmountOutput } from '../AmountOutput/AmountOutput.jsx'
import './InputForm.css'

export default function InputForm(props) {

    const {
        currencyOptions,
        selectedFromCurrency,
        selectedToCurrency,
        onChangeFromCurrency,
        onChangeToCurrency
    } = props
  return (
    <>
        <form className='input-form'>
            <CurrencyDropdown
                label="From"
                currencyOptions = { currencyOptions }
                selectedCurrency = { selectedFromCurrency }
                currencyChange = { onChangeFromCurrency }
            />
            <CurrencyDropdown
                label="To"
                currencyOptions = { currencyOptions }
                selectedCurrency = { selectedToCurrency }
                currencyChange = { onChangeToCurrency }
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
