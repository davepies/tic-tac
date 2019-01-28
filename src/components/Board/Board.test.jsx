import React from 'react';
import { shallow } from 'enzyme';

import Board from './';

test('<Board /> renders', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper).toMatchSnapshot();
});

test('<Board /> contains 3 rows', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('styled__BoardRow').length).toEqual(3);
});

test('<Board /> contains status message', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('styled__Status').text().length).toBeGreaterThan(0);
});

test('<Board /> has player "X" starging', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('styled__Status').text()).toMatch('Next player: X');
});