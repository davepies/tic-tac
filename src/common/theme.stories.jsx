import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from '@emotion/styled';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import { gradientBorder } from './theme';

storiesOf('withGradientBorder', module)
    .add('Default', () => {
        const gradient = text('Gradient', 'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)');
        const borderWidth = number('Border Width', 5);
        const boxBackground = text('Box Background', 'rgba(0,0,0,0.8)');
        
        const BoxWithGradientBorder = styled.div`
            ${gradientBorder(gradient, `${borderWidth}px`)};

            display: flex;
            justify-content: center;
            align-items: center;

            width: 200px;
            height: 200px;
            margin: 20px auto;

            background: ${boxBackground};
            color: white;

            font-size: 1.5rem;
            text-transform: uppercase;
        `;

        return (
            <>
                <BoxWithGradientBorder>Some Text</BoxWithGradientBorder>
            </>
        );
    })