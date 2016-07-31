import nock from 'nock';
import axios from 'axios';
import expect from 'expect';
import {fetchImages} from './flickr';

describe('Test for Api', () => {
  const expectValue = {'farm': "static", "server": "admin", "id": 1, "secret": "password"};
  const api = nock('https://api.flickr.com')
    .get('services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5')
    .reply(200, expectValue);

  const actualValue = JSON.parse(api.interceptors[0].body);
  it('should return the required object', () => {
    expect(actualValue).toEqual(expectValue);
    expect(typeof actualValue).toEqual('object');
  })

  it('should access the endpoint', () => {
    const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
    const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`;
    expect(fetchImages()).toEqual(5)
  })
});
