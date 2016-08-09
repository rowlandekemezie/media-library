import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import HomePage from '../src/components/HomePage';
import {Link} from 'react-router';

describe('Test for HomePage view', () => {
  it('should render home page', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.length).toEqual(true);
    expect(wrapper.is('.App')).toEqual(true);
    expect(wrapper.find(Link).length).toEqual(1);
    expect(wrapper.find(Link).props().to).toEqual('images');
  });
});
