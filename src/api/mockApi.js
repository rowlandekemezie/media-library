import delay from './delay';


const images = [
  {
    id: 1,
    title: "images 1",
    watchHref: "https://farm2.staticflickr.com/1553/25266806624_fdd55cecbc.jpg"
  },
  {
    id: 2,
    title: "image 2",
    watchHref: "https://farm2.staticflickr.com/1581/25283151224_50f8da511e.jpg"
  },
  {
    id: 3,
    title: "image 3",
    watchHref: "https://farm2.staticflickr.com/1653/25265109363_f204ea7b54.jpg"
  },
  {
    id: 4,
    title: "image 4",
    watchHref: "https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg"

  },
  {
    id: 5,
    title: "image 5",
    watchHref: "https://farm2.staticflickr.com/1450/25888412766_44745cbca3.jpg"
  }
];

class imagesApi {
  static loadAllImages() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], images));
      }, delay);
    });
  }
}

export default imagesApi;
