import React from 'react';
import s from '../styles/Counter.module.css'
import Board from './Board';
import Button from './Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {changeCurrentValue, CounterStateType} from '../redux/reducers/counter-reducer';

type CounterProps = {
    setShowSettings: (bool: boolean) => void
}

const Counter: React.FC<CounterProps> = ({setShowSettings}) => {

    const dispatch = useDispatch()
    let {
        currentValue,
        minValue,
        maxValue,
    } = useSelector<AppRootStateType, CounterStateType>((state) => state.counter)

    const changeCount = () => {
        dispatch(changeCurrentValue(currentValue + 1))
    }
    const resetCount = () => dispatch(changeCurrentValue(minValue))
    const showSettings = () => setShowSettings(true)


    return (
        <div className={s.wrapper}>
            <Board count={currentValue} maxValue={maxValue}/>

            <div className={s.btnGroup}>
                <Button callBack={changeCount} disabled={currentValue === maxValue} title={'INC'}/>
                <Button callBack={resetCount} disabled={currentValue === minValue} title={'RESET'}/>
                <Button title={'SET'} callBack={showSettings} disabled={false}/>
            </div>

        </div>
    );
};

export default Counter;