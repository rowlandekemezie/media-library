import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import Header from './Header';
import {Link, IndexLink} from 'react-router';

describe('Test for HomePage view', () => {
  it('should render header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).toEqual(true);
    expect(wrapper.is('.text-center')).toEqual(true);
    expect(wrapper.find(Link).length).toEqual(3);
    expect(wrapper.find(IndexLink).length).toEqual(1);
  });
});
