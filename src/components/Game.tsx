import React from 'react';
import styled from 'styled-components';

import Board from './Board';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const Info = styled.div`
    margin-left: 20px;
`;

class Game extends React.Component {
    render() {
        return (
            <Wrapper>
                <Board />
                <Info>
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </Info>
            </Wrapper>
        );
    }
}

export default Game;