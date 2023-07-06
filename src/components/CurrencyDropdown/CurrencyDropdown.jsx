import React from 'react'

export default function CurrencyDropdown(props) {
    const { label } = props
    return (
        <>
            <label htmlFor={ label }>From</label>
            <select name='currency-type' id='from-currency'>
                <option>{label}</option>
            </select>
        </>
    )
}

export { CurrencyDropdown }
