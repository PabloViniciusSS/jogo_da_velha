import React from 'react';
import styles from '../../styles/components/Tabuleiro.module.css';
import Calculate_Winter from './Calculate_Winter';
import Square  from './Square';


export default class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }
  
    handleClick(i) {
      const squares = this.state.squares.slice();
      if (Calculate_Winter(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      
      });
    }
  
    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {

      const winner = Calculate_Winter(this.state.squares);
      let status;
      if(winner){
        status = 'Patabéns você venceu' + winner;
      } else {
        status = 'Perdedor' + (this.state.xIsNext ? 'X' : 'O');
      }

  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }