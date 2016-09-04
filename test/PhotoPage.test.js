/**
 * Created by rowland on 8/15/16.
 */
import expect from 'expect';
import React from 'react';
import { mount } from 'enzyme';
import PhotoPage from '../src/components/PhotosPage';


describe('Test for Image Page component', () => {
  const setUp = () => {
    const props = {
      images: [{ id: 1, test: 'test image' }],
      onHandleSelectImage: expect.createSpy(),
      selectedImage: { id: 1, test: 'test image' }
    };
    const Wrapper = mount(<PhotoPage {...props} />);
    return { Wrapper };
  };
  const { Wrapper } = setUp();

  it('should assert that Component exist', () => {
    expect(Wrapper).toExist();
  });
  
  it('should have render props', () => {
    expect(Wrapper.props().images).toEqual([{ id: 1, test: 'test image' }]);
    expect(typeof Wrapper.props().onHandleSelectImage).toEqual('function');
    expect(Wrapper.props().selectedImage).toEqual({ id: 1, test: 'test image' });
  });

  it('should render self', () => {
    expect(Wrapper.find('h2').text()).toEqual('Images');
    expect(Wrapper.find('h6').hasClass('title')).toBe(true);
    expect(Wrapper.find('img').length).toEqual(2);
    expect(Wrapper.find('div').length).toEqual(5);
  });
});
