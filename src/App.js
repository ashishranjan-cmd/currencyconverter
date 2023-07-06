import React, { useEffect } from 'react';
import { Currency } from './components/Currency/Currency';

const Base_URL = 'https://api.exchangerate.host/latest';

export default function App() {

  useEffect(() => {
    (async () => {
      await fetch(Base_URL)
      .then(res => res.json())
      .then(data => console.log(data))
    })();
  }, [])

  return (
    <div>
      <Currency />
    </div>
  )
}
