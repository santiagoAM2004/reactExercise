import React from 'react';
import { Buttons } from '../../UI/Buttons/Buttons';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <nav>
        <NavLink to = '/RickAndMorty'><Buttons nameButton= "Rick and Morty" styleButton="button1"/></NavLink>
        <NavLink to ='/Rick2'><Buttons nameButton= "Search Rick and Morty " styleButton="button2"/></NavLink>
        <Buttons nameButton="Twitter" styleButton="button3"/>
        <Buttons nameButton="Linkendin" styleButton="button1"/>
    </nav>
  )
}
