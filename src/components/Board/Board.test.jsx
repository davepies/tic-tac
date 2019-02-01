import React from 'react';
import { shallow } from 'enzyme';

import Board from './';

const squaresMock = Array(9).fill(null);

test('<Board /> renders', () => {
    const wrapper = shallow(<Board squares={squaresMock} />);
    expect(wrapper).toMatchSnapshot();
});

test('<Board /> contains 3 rows', () => {
    const wrapper = shallow(<Board squares={squaresMock} />);
    expect(wrapper.find('BoardRow').length).toEqual(3);
});