import React from 'react';

export const Buttons = ({styleButton, nameButton, events}) => {
  return (
    <button onClick={events} className = {styleButton}>{nameButton}</button>
  )
}
