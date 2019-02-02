import { css } from '@emotion/core';

export const theme = {
    colors: {
        primary: 'white',
        secondary: '#80FFB7'
    },

    dimensions: {
        squareSize: '6rem',
        squareFontSize: '5rem',
        squareBorderWidth: '.25rem'
    }
};

export const globalStyles = css`
    body {
        font: 14px "Century Gothic", Futura, sans-serif;
        margin: 20px;
        background: #2D2B55;
        color: white;
    }
`;