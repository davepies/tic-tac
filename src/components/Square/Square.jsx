import React, { Component } from 'react';

import { Wrapper, Flipper, Front, Back } from './styled';

class Square extends Component {
    state = {
        isFlipped: false
    };

    flip = () => this.setState({ isFlipped: true })

    handleClick = () => {
        const { onClick } = this.props;
        this.flip();
        onClick();
    }

    render() {
        const { value } = this.props;
        const { isFlipped } = this.state;

        return (
            <Wrapper onClick={this.handleClick}>
                <Flipper isFlipped={isFlipped}>
                    <Front></Front>
                    <Back>{value}</Back>
                </Flipper>
            </Wrapper>
        );
    }
}

export default Square;
