import React from 'react';
import '../InputForm/InputForm.css'

export default function CurrencyDropdown(props) {

    const { 
        label, 
        currencyOptions,
        selectedCurrency 
    } = props

    const uniqueCurrencyOptions = [...new Set(currencyOptions)];

    return (
        <>
            <label htmlFor={ label }>{ label }</label>
            <select name='currency-type' id={label + '-currency'} value={ selectedCurrency}>
                { uniqueCurrencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </>
    )
}

export { CurrencyDropdown }
