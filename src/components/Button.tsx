import React from 'react';
import s from '../styles/Button.module.css'

type ButtonProps = {
    title: string
    callBack: () => void
    disabled: boolean
}

const Button: React.FC<ButtonProps> = ({disabled, callBack, title}) => {
    return (
        <button
            className={s.btn}
            disabled={disabled}
            onClick={callBack}
        >{title}</button>
    );
};

export default Button;