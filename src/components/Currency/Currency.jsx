import React from 'react';
import { Header } from '../Header/Header.jsx';
import { InputForm } from '../InputForm/InputForm.jsx'
import './Currency.css'

export default function Currency() {
  return (
    <div className='main'>
      <div className='container' id='panel'>
        <Header />
        <InputForm />
      </div>
    </div>
  )
}

export { Currency };
