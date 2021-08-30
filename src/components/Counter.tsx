import React, {useEffect, useState} from 'react';
import s from '../styles/Counter.module.css'
import Board from './Board';
import Button from './Button';

type CounterProps = {
    minValue: number
    maxValue: number
    setShowSettings: (bool: boolean) => void
}

const Counter: React.FC<CounterProps> = ({maxValue, minValue, setShowSettings}) => {

    const [count, setCount] = useState(minValue)

    useEffect(() => {
        const counterAsString = localStorage.getItem('countValue')
        if (counterAsString) {
            const counter = JSON.parse(counterAsString)
            setCount(counter)
            if (counter < minValue || counter > maxValue) setCount(minValue)
        }
    }, [maxValue, minValue])

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(count))
    }, [count])

    const changeCount = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(minValue)
    }

    const showSettings = () => {
        setShowSettings(true)
    }


    return (
        <div className={s.wrapper}>
            <Board count={count} maxValue={maxValue}/>
            <div className={s.btnGroup}>
                <Button callBack={changeCount} disabled={count === maxValue} title={'INC'}/>
                <Button callBack={resetCount} disabled={count === minValue} title={'RESET'}/>
                <Button title={'SET'} callBack={showSettings} disabled={false}/>

            </div>


        </div>
    );
};

export default Counter;