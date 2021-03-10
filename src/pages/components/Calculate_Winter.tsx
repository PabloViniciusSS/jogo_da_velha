import React from 'react';
import { render } from 'react-dom';
import styles from '../../styles/components/Calculate_Winter.module.css';

export default function Calculate_Winter(squares){
    const line = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(let i = 0; i < line.length; i++) {
        const[a,b,c] = line[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

