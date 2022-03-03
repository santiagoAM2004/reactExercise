import React from 'react'
import { Header } from '../Layouts/Header/Header';
import { AboutUsHeader } from '../Layouts/Header/AboutUsHeader'
import { AboutUsMain } from '../Layouts/Main/AboutUsMain'

export const AboutUs = () => {
  return (
    <div>
        <Header />
        <AboutUsHeader />
        <AboutUsMain />
    </div>
  )
}
