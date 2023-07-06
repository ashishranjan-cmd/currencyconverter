import React from 'react'

export default function CurrencyDropdown(props) {
    const { label } = props
    return (
        <>
            <label htmlFor={ label }>{ label }</label>
            <select name='currency-type' id={label + '-currency'}>
                <option>{label}</option>
            </select>
        </>
    )
}

export { CurrencyDropdown }
