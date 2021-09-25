import React, {useState} from 'react';
import s from './styles/App.module.css'
import Counter from './components/Counter';
import Settings from './components/Settings';

const App = () => {
    const [showSettings, setShowSettings] = useState(false);

    return (
        <div className={s.app}>
            {
                showSettings
                    ? <Settings setShowSettings={setShowSettings}/>
                    : <Counter setShowSettings={setShowSettings}/>

            }
        </div>
    );
};

export default App;