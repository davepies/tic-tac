import { css, keyframes } from '@emotion/core';

export const theme = {
    colors: {
        background: '#2D2B55',
        primary: 'white',
        secondary: '#80FFB7'
    },

    dimensions: {
        squareSize: '6rem',
        squareFontSize: '5rem',
        squareBorderWidth: '.25rem'
    }
};

export const shine = keyframes`
    from {
        -webkit-filter: hue-rotate(0deg);
    }
    to {
        -webkit-filter: hue-rotate(-360deg);
    }
`;

const animatedgradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const gradientBorder = (gradient, borderWidth) => {
    return (
        css`
            --borderWidth: ${borderWidth};
            background: #1D1F20;
            position: relative;
            border-radius: var(--borderWidth);

            :after {
                content: '';
                position: absolute;
                top: calc(-1 * var(--borderWidth));
                left: calc(-1 * var(--borderWidth));
                height: calc(100% + var(--borderWidth) * 2);
                width: calc(100% + var(--borderWidth) * 2);
                background: ${gradient || defaultGradient};
                border-radius: calc(2 * var(--borderWidth));
                z-index: -1;
                animation: ${animatedgradient} 3s ease alternate infinite;
                background-size: 300% 300%;        
            }`
    );
};

export const globalStyles = css`
    html {
        height: 100%;
    }
    body {
        min-height: calc(100% - 4rem);
        margin: 0;
        padding: 0;
        border: 2rem solid black;
        font: 14px Lazer84, "Century Gothic", Futura, sans-serif;
        background: ${theme.colors.background};
        color: #FFEE7B;
    }

    h1 {
        font-size: 4rem;
        text-align: center;
        background: linear-gradient(#CC0163, #F3D000);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: #CC0163;
        animation: ${shine} 15s linear infinite;
    }
`;