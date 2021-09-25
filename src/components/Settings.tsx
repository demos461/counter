import React, {ChangeEvent, useState} from 'react';
import s from '../styles/Settings.module.css'
import Button from './Button';

type SettingsProps = {
    minValue: number
    maxValue: number
    setMinValue: (newValue: number) => void
    setMaxValue: (newValue: number) => void
    setShowSettings: (bool: boolean) => void
}

const Settings: React.FC<SettingsProps> = ({minValue, maxValue, setMaxValue, setMinValue, setShowSettings}) => {

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
    }

    const setMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value)
        checkError(+e.currentTarget.value, maxValue)
    }

    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        checkError(minValue,+e.currentTarget.value)
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