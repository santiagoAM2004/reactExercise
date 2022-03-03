import React, {useState} from 'react';
import { Buttons } from '../../UI/Buttons/Buttons';

export const CounterHeader = () => {

    const [Counter, setCounter] = useState(0);
    const Rest = ()=> setCounter(Counter - 1);
    const Plus = ()=> setCounter(Counter + 1);
    const Reset = ()=> setCounter(0);

  return (
    <div>
        <h2>{Counter}</h2>
        <Buttons onClick={Rest} nameButton = "<" styleButton="button1" />
        <Buttons onClick={Plus} nameButton = ">" styleButton="button1" />
        <Buttons onClick={Reset} nameButton = "Reset" styleButton="button1" />
    </div>
  )
}
