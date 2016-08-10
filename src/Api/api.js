const FLICKR_API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const SHUTTER_CLIENT_ID = '3434a56d8702085b9226';
const SHUTTER_CLIENT_SECRET = '7698001661a2b347c2017dfd50aebb2519eda578';
const UNSPLASH_APPLICATION_ID = '27a2ae2766d5ed61a5b8d33669a98704fd47ccefa87077dee380f4e3b231df4d';
const basicAuth = () => 'Basic '.concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`));
const authParameters = {
  headers: {
    Authorization: basicAuth()
  }
};

export const shutterStockVideos = (searchQuery) => {
  const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/videos/search?query=${searchQuery}&page=1&per_page=10`;
  return fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters).then(response => {
    return response.json().then(json => {
      console.log(json.data, 'assets')
      return json.data.map(({ id, assets }) => ({
        id,
        mediaUrl: assets.thumb_mp4.url,
        photoUrl: assets.preview_jpg.url
      }));
    });
  });
};

export const unsplashImages = (searchQuery) => {
  const UNSPLASH_API_ENDPOINT = `https://api.unsplash.com/photos/search/?client_id=${UNSPLASH_APPLICATION_ID}&query=${searchQuery}&page=1&per_page=5`;
  return fetch(UNSPLASH_API_ENDPOINT).then(response => {
    return response.json().then(data => {
      return data.map(({ id, urls, links }) => ({
        id,
        mediaUrl: urls.small,
        download: links.download
      }));
    });
  });
};

export const flickrImages = (searchQuery) => {
  const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`;
  return fetch(FLICKR_API_ENDPOINT).then(response => {
    return response.json().then(json => {
      return json.photos.photo.map(({ farm, server, id, secret }) => ({
        id,
        mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      }));
    });
  });
};
