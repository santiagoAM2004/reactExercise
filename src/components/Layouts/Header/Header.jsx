import React from 'react';
import { Buttons } from '../../UI/Buttons/Buttons';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <nav>
        <NavLink to = '/'><Buttons nameButton = "Homen" styleButton="button1"/></NavLink>
        <NavLink to = '/AboutUs'><Buttons nameButton = "About us" styleButton="button2"/></NavLink>
        <NavLink to = '/Counter'><Buttons nameButton = "Counter" styleButton="button3"/></NavLink>
        
    </nav>
  )
}




