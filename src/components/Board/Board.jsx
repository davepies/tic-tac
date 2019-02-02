import React from 'react';

import Square from '../Square';
import { BoardRow } from './styled';

class Board extends React.Component {
    renderSquare(i) {
        const { squares, onClick } = this.props;
        return (
            <Square
                value={squares[i]}
                onClick={() => onClick(i)}
            />
        );
    }

    render() {
        return (
            <>
                <BoardRow>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </BoardRow>
                <BoardRow>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </BoardRow>
                <BoardRow>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </BoardRow>
            </>
        );
    }
}

export default Board;