import nock from 'nock';
import 'isomorphic-fetch';
import expect from 'expect';
import { flickrImages, shutterStockVideos } from '../src/Api/api';

describe('Test for Api', () => {
  it('should call flickr Api', () => {
    flickrImages('rain').then((res) => {
      expect(res.length).toEqual(10);
    });
  });

  it('should call shutterStock Api', () => {
    shutterStockVideos('sun').then((res) => {
      expect(res.length).toEqual(10);
    });
  });
});
