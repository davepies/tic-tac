import React from 'react';

import { Button } from './styled';

const Square = (props) => {
    const { value, onClick } = props;
    const isOccupied = value !== null;
    return (
        <Button onClick={onClick} occupied={isOccupied}>
            {value}
        </Button>
    );
}

export default Square;
