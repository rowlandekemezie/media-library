import nock from 'nock';
import expect from 'expect';

describe('Test for Api', () => {
  const expectValue = {'farm': "static", "server": "admin", "id": 1, "secret": "password"};
  const api = nock('https://api.flickr.com')
    .get('services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5')
    .reply(200, expectValue);

  const actualValue = JSON.parse(api.interceptors[0].body);
  it('should return the required object', () => {
    expect(actualValue).toEqual(expectValue);
    expect(typeof actualValue).toEqual('object');
  });
});
