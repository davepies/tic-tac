import { css } from '@emotion/core';
import styled from '@emotion/styled';

// shared styles and settings

const flipSpeed = '0.6s';

const dimensions = ({ theme }) => css`
    width: ${theme.dimensions.squareSize};
    height: ${theme.dimensions.squareSize};
`;

const card = ({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;

    background: ${theme.colors.primary};
`;

// components
export const Wrapper = styled.div`
	perspective: 1000px;
`;

export const Flipper = styled.div`
    ${dimensions};

    transform: ${({ isFlipped }) => isFlipped ? 'rotateY(180deg)' : 'none'};
    transition: ${flipSpeed};
	transform-style: preserve-3d;
	position: relative;

    line-height: ${({ theme }) => theme.dimensions.squareSize};

    font-size: ${({ theme }) => theme.dimensions.squareFontSize};
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};

    font-weight: bold;
    text-align: center;

    cursor: ${({ isFlipped }) => isFlipped ? 'no-drop' : 'pointer'};

    :focus {
        outline: none;
    }
`;

export const Front = styled.div`
    ${dimensions};
    ${card};

    z-index: 2;
    transform: rotateY(0deg);
`;

export const Back = styled.div`
    ${dimensions};
    ${card};

    transform: rotateY(180deg);
`;

export const Button = styled.button`
    width: ${({ theme }) => theme.dimensions.squareSize};
    line-height: ${({ theme }) => theme.dimensions.squareSize};
    height: ${({ theme }) => theme.dimensions.squareSize};

    font-size: ${({ theme }) => theme.dimensions.squareFontSize};
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};

    font-weight: bold;
    text-align: center;

    cursor: ${({ occupied }) => occupied ? 'no-drop' : 'pointer'};

    :focus {
        outline: none;
    }
`;