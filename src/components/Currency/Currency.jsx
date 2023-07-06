import React from 'react';
import { Header } from '../Header/Header.jsx';
import './Currency.css'

export default function Currency() {
  return (
    <div className='main'>
      <div className='container' id='panel'>
        <Header />
      </div>
    </div>
  )
}

export { Currency };
