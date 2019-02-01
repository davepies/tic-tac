import React, { Component } from 'react';

import { Wrapper, Flipper, Front, Back } from './styled';

class Square extends Component {
    state = {
        isFlipped: false
    };

    flip = () => this.setState({ isFlipped: true })

    render() {
        const {value, onClick } = this.props;
        const { isFlipped } = this.state;

        return (
            <Wrapper onClick={() => { this.flip(); onClick();  }}>
                <Flipper isFlipped={isFlipped}>
                    <Front></Front>
                    <Back>{value}</Back>
                </Flipper>
            </Wrapper>
        );
    }
}

export default Square;
