import React, { PropTypes } from 'react';

const PhotosPage = ({ images, onHandleSelectImage, selectedImage }) => {
  return (
    <div className="col-md-6">
      <h4> Images </h4>
      <div className="gallery-image">
        <div id={selectedImage.id}>
          <h6>{selectedImage.title}</h6>
          <img width="600" height="700" src={selectedImage.mediaUrl} alt="selected media" />
        </div>
      </div>
      <div className="image-thumbnail">
        {images.map(image => (
          <div key={image.id} onClick={onHandleSelectImage.bind(this, image)}>
            <img width="150" height="150" src={image.mediaUrl} alt="select avatar" />
          </div>
        ))}
      </div>
    </div>
  );
};

PhotosPage.propTypes = {
  images: PropTypes.array.isRequired,
  selectedImage: PropTypes.object,
  onHandleSelectImage: PropTypes.func.isRequired
};

export default PhotosPage;
