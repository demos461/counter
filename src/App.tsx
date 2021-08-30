import React, {useEffect, useState} from 'react';
import s from './styles/App.module.css'
import Counter from './components/Counter';
import Settings from './components/Settings';

const App = () => {

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [showSettings, setShowSettings] = useState(false);


    useEffect(() => {
        const min = localStorage.getItem('minValue')
        const max = localStorage.getItem('maxValue')
        if (min && max) {
            setMinValue(JSON.parse(min))
            setMaxValue(JSON.parse(max))
        }
    },[])

    useEffect(() => {
        localStorage.setItem('minValue', minValue.toString())
        localStorage.setItem('maxValue', maxValue.toString())
    }, [minValue, maxValue])


    return (
        <div className={s.app}>
            {
                showSettings ?
                    <Settings
                        minValue={minValue}
                        maxValue={maxValue}
                        setMaxValue={setMaxValue}
                        setMinValue={setMinValue}
                        setShowSettings={setShowSettings}
                    />
                    :
                    <Counter minValue={minValue} maxValue={maxValue} setShowSettings={setShowSettings}/>

            }
        </div>
    );
};

export default App;