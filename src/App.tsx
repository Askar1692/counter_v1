import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button/Button";
import s from './Button/Button.module.css'

function App() {

    let [value, setValue] = useState(0)

    const incrementFunc = () => {
        if (value <= 4) {
            setValue(++value)
        }
    }

    const resetFunc = () => {
        setValue(0)
    }

    return (
        <div className={s.container}>
            <h2 className={s.number}>{value}</h2>
            <div className={s.counter}><Button name={'INC'} callBack={incrementFunc} disabled={value === 5}/></div>
            <div className={s.reset}><Button name={'RESET'} callBack={resetFunc} disabled={value === 0}/></div>
        </div>
    );
}

export default App;
