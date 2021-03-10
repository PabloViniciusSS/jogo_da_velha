import React from 'react';
import styles from '../../styles/components/Game.module.css';
import Tabuleiro from './Board';


export default class Game extends React.Component {
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.game_tabuleiro}>
                    <Tabuleiro />
                </div>
                <div className={styles.info}>
                   
                </div>
            </div>
        );
    }
}