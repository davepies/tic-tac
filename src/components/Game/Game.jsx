import React from 'react';

import Board from '../Board/Board';

import { Wrapper, Info } from './styled';

class Game extends React.Component {
    render() {
        return (
            <Wrapper>
                <div>
                    <Board />
                    <Info>
                        <div>{/* status */}</div>
                        <ol>{/* TODO */}</ol>
                    </Info>
                </div>
            </Wrapper>
        );
    }
}

export default Game;