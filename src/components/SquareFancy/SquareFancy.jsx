import React from 'react';

import { Button } from './styled';

const SquareFancy = (props) => {
    const { value, onClick } = props;
    const isOccupied = value !== null;
    return (
        <Button onClick={onClick} occupied={isOccupied}>
            {value}
        </Button>
    );
}

export default SquareFancy;
