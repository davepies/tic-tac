import React from 'react';

import Board from '../Board/Board';

import { Wrapper, Status, Info, ResetButton } from './styled';
import { winning } from '../../common/helpers';

class Game extends React.Component {

    initialState = {
        history: [{
            // empty board - same initial data as Board
            squares: Array(9).fill(null),
        }],
        currentPlayer: 'X',
        winner: null
    }

    state = { ...this.initialState };

    handleClick(i) {
        const { history, currentPlayer } = this.state;
        const { squares } = history[history.length - 1];

        const nextSquares = [
            ...squares
        ];

        // square is taken
        if (squares[i]) {
            return;
        }

        nextSquares[i] = currentPlayer;

        this.setState({
            history: [
                ...history,
                { squares: nextSquares }
            ],
            currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
            winner: winning(nextSquares, currentPlayer) ? currentPlayer : null
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
        const { history, currentPlayer, winner } = this.state;
        const { numberOfPlayers } = this.props;
        const { squares } = history[history.length - 1];

        if (winner) {
            return this.renderGameOver(winner);
        }

        return (
            <Wrapper>
                <h2>{numberOfPlayers}</h2>
                <div>
                    <Board
                        squares={squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                    <Info>
                        <Status>Player: <strong>{currentPlayer}</strong></Status>
                        <ol>{/* TODO */}</ol>
                    </Info>
                </div>
            </Wrapper>
        );
    }
}

export default Game;