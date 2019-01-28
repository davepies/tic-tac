import styled from 'styled-components';

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