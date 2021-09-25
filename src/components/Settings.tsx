import React, {ChangeEvent, useState} from 'react';
import s from '../styles/Settings.module.css'
import Button from './Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {changeCurrentValue, changeMaxValue, changeMinValue, CounterStateType} from '../redux/reducers/counter-reducer';

type SettingsProps = {
    setShowSettings: (bool: boolean) => void
}

const Settings: React.FC<SettingsProps> = ({setShowSettings}) => {

    const dispatch = useDispatch()
    const {
        currentValue,
        minValue,
        maxValue,
    } = useSelector<AppRootStateType, CounterStateType>((state) => state.counter)


    const [btnDisabled, setBtnDisabled] = useState(false);
    const [error, setError] = useState(false);

    const checkError = (min: number, max: number) => {
        if (min === max || min < 0 || min > max) {
            setBtnDisabled(true)
            setError(true)
        } else {
            setError(false)
            setBtnDisabled(false)
        }
        if (currentValue < min) dispatch(changeCurrentValue(min))
        if (currentValue > max) dispatch(changeCurrentValue(max))

    }

    const setMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMinValue(+e.currentTarget.value))
        checkError(+e.currentTarget.value, maxValue)
    }

    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValue(+e.currentTarget.value))
        checkError(minValue, +e.currentTarget.value)
    }

    const showCounter = () => setShowSettings(false)


    return (
        <div className={s.settings}>
            <div>
                <label>
                    Max value
                    <input
                        className={error ? s.error : ''}
                        type="number"
                        value={maxValue}
                        onChange={setMaxValueHandler}/>
                </label>
                <label>
                    Min value
                    <input
                        className={error ? s.error : ''}
                        type="number"
                        value={minValue}
                        onChange={setMinValueHandler}/>
                </label>

            </div>
            <Button title={'set'} callBack={showCounter} disabled={btnDisabled}/>
        </div>
    );
};

export default Settings;