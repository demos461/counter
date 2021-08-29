import React, {useState} from 'react';
import s from '../styles/Counter.module.css'
import Board from './Board';
import Button from './Button';

const Counter = () => {

    const [count, setCount] = useState(0)

    const changeCount = () => {
        let newCount = count + 1
        setCount(newCount)
    }

    const resetCount = () => {
        setCount(0)
    }


    return (
        <div className={s.wrapper}>
            <Board count={count}/>
            <div className={s.btnGroup}>
                <Button callBack={changeCount} disabled={count === 5} title={'INC'}/>
                <Button callBack={resetCount} disabled={count === 0} title={'RESET'}/>
            </div>


        </div>
    );
};

export default Counter;