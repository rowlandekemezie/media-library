import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import App from '../src/containers/App';


describe('Test App', () => {
  const wrapper = shallow(<App children="test children" />);
  it('should render self', () => {
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('div').hasClass('container-fluid')).toBe(true);
  });

  it('should render children', () => {
    expect(typeof wrapper.node.props.children).toBe('object');
  });
});

