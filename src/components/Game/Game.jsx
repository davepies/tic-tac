import React from 'react';

import Board from '../Board/Board';

import { Wrapper, Status, Info, ResetButton } from './styled';
import { calculateWinner } from '../../common/helpers';

class Game extends React.Component {

    initialState = {
        history: [{
            // empty board - same initial data as Board
            squares: Array(9).fill(null),
        }],
        xIsNext: true
    }

    state = { ...this.initialState };

    handleClick(i) {
        const { history, xIsNext } = this.state;
        const { squares } = history[history.length - 1];

        const nextSquares = {
            ...squares
        };

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        nextSquares[i] = xIsNext ? 'X' : 'O';

        this.setState({
            history: [
                ...history,
                { squares: nextSquares }
            ],
            xIsNext: !xIsNext
        })
    }

    resetGame() {
        this.setState(this.initialState);
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
        const { history, xIsNext } = this.state;

        const { squares } = history[history.length - 1];
        const winner = calculateWinner(squares);

        if (winner) {
            return this.renderGameOver(winner);
        }

        const statusMessage = `Next player: ${xIsNext ? 'X' : 'O'}`;

        return (
            <Wrapper>
                <div>
                    <Board
                        squares={squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                    <Info>
                        <Status>{statusMessage}</Status>
                        <ol>{/* TODO */}</ol>
                    </Info>
                </div>
            </Wrapper>
        );
    }
}

export default Game;