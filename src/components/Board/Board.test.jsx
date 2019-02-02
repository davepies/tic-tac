import React from 'react';
import { shallow } from 'enzyme';

import Board from './';

test('<Board /> renders', () => {
    const squaresMock = Array(9).fill(null);

    const wrapper = shallow(<Board squares={squaresMock} />);
    expect(wrapper).toMatchSnapshot();
});

test('<Board /> contains 3 rows', () => {
    const rowCount = 3;
    const squaresMock = Array(rowCount * rowCount).fill(null);

    const wrapper = shallow(<Board squares={squaresMock} />);

    expect(wrapper.find('BoardRow').length).toEqual(3);
});