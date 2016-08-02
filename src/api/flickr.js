const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const SHUTTER_CLIENT_ID = '3434a56d8702085b9226';
const SHUTTER_CLIENT_SECRET = '7698001661a2b347c2017dfd50aebb2519eda578';
const UNSPLASH_APPLICATION_ID = '27a2ae2766d5ed61a5b8d33669a98704fd47ccefa87077dee380f4e3b231df4d';
const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`;
const INSTRAGRAM_API_ENDPOINT = 'https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=260796206.0efbe26.89a76a9668934089a2d00d928486fd26';
const SHUTTER_API_ENDPOINT = `https://api.shutterstock.com/v2/images/search?query=obama&page=1&per_page=5`;

const BasicAuth = () => 'Basic ' + window.btoa(SHUTTER_CLIENT_ID + ':' + SHUTTER_CLIENT_SECRET);
var authParameters = {
  headers: {
    Authorization: BasicAuth()
  }
};

export const shutterImage = () => {
  return fetch(SHUTTER_API_ENDPOINT, authParameters).then(response => {
    return response.json().then((json) => {
     return json.data.map(({id, assets}) => {
       console.log(assets.preview.url, id, 'shutterStock Api  ');
        return {
          id: id,
          mediaUrl: assets.preview.url
        }
      });
    });
  });
};


export const unsplashImage = (query_params) => {
  const UNSPLASH_API_ENDPOINT = `https://api.unsplash.com/photos/search/?client_id=${UNSPLASH_APPLICATION_ID}&query=${query_params}&page=1`;
  return fetch(UNSPLASH_API_ENDPOINT).then(response => {
    return response.json().then((data) => {
     return data.map(({id, urls, links}) => {
        return {
          id: id,
          mediaUrl: urls.full,
          download: links
        }
      });
    });
  });
};
// unsplashImage();

export const instagramImage = () => {
  return fetch(INSTRAGRAM_API_ENDPOINT, {credentials: 'include'}).then((response) => {
    return response.json().then((json) => {
      return json.data.map(({url, id}) => {
        return {
          id: id,
          mediaUrl: url
        }
      });
    });
  });
};

export const flickrImages = () => {
  return fetch(FLICKR_API_ENDPOINT).then((response) => {
    return response.json().then((json) => {
      return json.photos.photo.map(({farm, server, id, secret}) => {
        return {
          id: id,
          mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
        }
      });
    })
  });
};

