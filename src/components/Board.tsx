import React from 'react';
import s from '../styles/Board.module.css'

type BoardProps = {
    count: number
}

const Board: React.FC<BoardProps> = ({count}) => {
    return (
        <div className={`${s.board} ${count === 5 ? s.red : ''}`}>
            {count}
        </div>
    );
};

export default Board;