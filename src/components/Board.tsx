import React from 'react';
import s from '../styles/Board.module.css'

type BoardProps = {
    count: number
    maxValue: number
}

const Board: React.FC<BoardProps> = ({count,maxValue}) => {
    return (
        <div className={`${s.board} ${count === maxValue ? s.red : ''}`}>
            {count}
        </div>
    );
};

export default Board;