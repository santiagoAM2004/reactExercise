import React from 'react';
import { CounterHeader } from '../Layouts/Header/CounterHeader';
import { Header } from '../Layouts/Header/Header'
import { Footer } from '../Layouts/Footer/Footer'

export const Counter = () => {
  return (
    <div>
        <Header />
        <CounterHeader />
        <Footer />
    </div>
  )
}
