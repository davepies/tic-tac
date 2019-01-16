import React from 'react';
import styled from 'styled-components';

const SquareButton = styled.button<{ occupied?: boolean }>`
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;
    cursor: ${({ occupied }) => occupied ? 'no-drop' : 'pointer'};

    :focus {
        outline: none;
    }
`;

export interface ISquareProps {
    value: string | null;
    onClick?: () => void;
}

const Square = (props: ISquareProps): JSX.Element => {
    const { value, onClick } = props;
    const isOccupied = value !== null;
    return (
        <SquareButton onClick={onClick} occupied={isOccupied}>
            {value}
        </SquareButton>
    );
}

export default Square;
