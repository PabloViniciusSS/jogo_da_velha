import React from 'react';
import styles from '../../styles/components/Quadrado.module.css';

export default function Square(props){
      return (
        <button
          className="square"
          onClick={props.onClick}
        >
          {props.value}
        </button>
      );
    }
  
