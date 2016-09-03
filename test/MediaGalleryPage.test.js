/**
 * Created by rowland on 8/15/16.
 */
import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { MediaGalleryPage } from '../src/containers/MediaGalleryPage';

const setup = () => {
  const props = {
    handleSearch: expect.createSpy(),
    handleSelectImage: expect.createSpy(),
    handleSelectVideo: expect.createSpy(),
    dispatch: expect.createSpy(),
    ref: expect.createSpy(),
    value: 'ref',
    images: [{ id: 1, mediaUrl: 'test image url' }],
    videos: [{ id: 1, mediaUrl: 'test video url' }],
    selectedVideo: { id: 1, mediaUrl: 'test video url' },
    selectedImage: { id: 1, mediaUrl: 'test image url' }
  };

  const Wrapper = shallow(<MediaGalleryPage {...props} />);
  return { Wrapper, props };
};

describe('Test for MediaGalleryPage', () => {
  it('should render self and subcomponents', () => {
    const { Wrapper } = setup();

    expect(Wrapper.find('div').length).toEqual(3);
    const PhotoPageWrapper = Wrapper.find('PhotosPage').props();
    const VideoPageWrapper = Wrapper.find('VideosPage').props();
    expect(PhotoPageWrapper.images).toEqual([{ id: 1, mediaUrl: 'test image url' }]);
    expect(PhotoPageWrapper.selectedImage).toEqual({ id: 1, mediaUrl: 'test image url' });
    expect(typeof PhotoPageWrapper.onHandleSelectImage).toBe('function');
    expect(VideoPageWrapper.videos).toEqual([{ id: 1, mediaUrl: 'test video url' }]);
    expect(VideoPageWrapper.selectedVideo).toEqual({ id: 1, mediaUrl: 'test video url' });
    expect(typeof VideoPageWrapper.onHandleSelectVideo).toBe('function');
  });

  it('should call dispatch on onHandleSelectImage', () => {
    const { Wrapper, props } = setup();

    const input = Wrapper.find('PhotosPage');
    input.props().onHandleSelectImage({ id: 1, mediaUrl: 'test image url' });
    expect(props.dispatch.calls.length).toBe(1);
  });

  it('should call dispatch onHandleSelectVideo', () => {
    const { Wrapper, props } = setup();

    const input = Wrapper.find('VideosPage');
    input.props().onHandleSelectVideo({ id: 1, mediaUrl: 'test video url' });
    expect(props.dispatch.calls.length).toBe(1);
  });

  it('should call dispatch on onClick event', () => {
    const { props } = setup();
    const testWrapper = mount(<MediaGalleryPage {...props} />)
    const input = testWrapper.find('input').last();
    const event = { preventDefault: () => {} };
    input.simulate('click', event);
    expect(props.dispatch.calls.length).toBe(2);
  });
});
