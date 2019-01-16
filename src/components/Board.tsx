import React from 'react';
import styled from 'styled-components';

import { calculateWinner } from '../helpers';

import Square from './Square';

const BoardRow = styled.div`
    clear: both;
    content: "";
    display: table;
`;

const Status = styled.div`
    margin-bottom: 10px;
`;

const ResetButton = styled.button`
    background: green;
`;

interface IBoardState {
    squares: (string | null)[];
    xIsNext: boolean
}

class Board extends React.Component<{}, IBoardState> {
    initialState: IBoardState = {
        squares: [
            null, null, null,
            null, null, null,
            null, null, null
        ],
        xIsNext: true
    }

    state: IBoardState = { ...this.initialState };

    resetGame() {
        this.setState(this.initialState)
    }

    updateGame(squareToUpdateIndex: number): void {
        const { squares, xIsNext } = this.state;
        const nextSquares = [...squares];


        // square has already been set
        if (nextSquares[squareToUpdateIndex] != null) {
            return;
        }

        nextSquares[squareToUpdateIndex] = xIsNext ? 'X' : 'O';

        this.setState({
            squares: nextSquares,
            xIsNext: !xIsNext
        });
    }

    renderSquare(i: number): JSX.Element {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.updateGame(i)}
            />
        );
    }

    renderGameOver(winner: string): JSX.Element {
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
            </>
        );
    }
}

export default Board;