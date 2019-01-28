import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import Square from './';

test('<Square /> renders', () => {
    const wrapper = shallow(<Square value={'X'} />);

    expect(wrapper).toMatchSnapshot();
});

test('<Square /> contains passed value', () => {
    const value = 'XYZ';
    const wrapper = shallow(<Square value={value} />);

    expect(wrapper.contains(value)).toBe(true);
});

test('<Square /> calls onClick', () => {
    const value = 'XYZ';
    const onClick = sinon.spy();

    const wrapper = shallow(<Square value={value} onClick={onClick} />);
    wrapper.simulate('click');

    expect(onClick.callCount).toBe(1);
});