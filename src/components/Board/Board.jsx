import React from 'react';

import { calculateWinner } from '../../common/helpers';

import Square from '../Square';
import { BoardRow, Status, ResetButton } from './styled';

class Board extends React.Component {

    initialState = {
        squares: [
            null, null, null,
            null, null, null,
            null, null, null
        ],
        xIsNext: true,
        history: [[
            null, null, null,
            null, null, null,
            null, null, null
        ]],
        historyIndex: 0
    }

    state = { ...this.initialState };

    resetGame() {
        this.setState(this.initialState)
    }

    updateGame(squareToUpdateIndex) {
        const { squares, xIsNext, history, historyIndex } = this.state;
        const nextSquares = [...squares];
        const nextHistory = [...history];
        const nextHistoryIndex = historyIndex + 1;

        // the square has already been set
        if (nextSquares[squareToUpdateIndex] != null) {
            return;
        }

        nextSquares[squareToUpdateIndex] = xIsNext ? 'X' : 'O';
        nextHistory.push(nextSquares);

        this.setState({
            history: nextHistory,
            historyIndex: nextHistoryIndex,
            squares: nextSquares,
            xIsNext: !xIsNext
        });
    }

    backInHistory() {
        const { history, historyIndex } = this.state;

        const nextHistoryIndex = (historyIndex - 1) > -1 ? historyIndex - 1 : historyIndex;
        const nextSquares = history[nextHistoryIndex];

        this.setState({
            historyIndex: nextHistoryIndex,
            squares: nextSquares
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.updateGame(i)}
            />
        );
    }

    renderGameOver(winner) {
        return (
            <div>
                We have a winner!!! {winner} earns 1.0000000 AUD
                    <ResetButton onClick={() => this.resetGame()}>Play again</ResetButton>
            </div>
        )
    }

    render() {
        const { squares, xIsNext } = this.state;
        const winner = calculateWinner(squares);

        if (winner) {
            return this.renderGameOver(winner);
        }

        const statusMessage = `Next player: ${xIsNext ? 'X' : 'O'}`;

        return (
            <>
                <Status>{statusMessage}</Status>
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
                <button onClick={() => this.backInHistory()}>Back in History</button>
            </>
        );
    }
}

export default Board;