import React, {PropTypes} from 'react';

const GalleryDisplay = ({images, onHandleSelectImage, selectedImage}) => {
  return (
    <div className="image-gallery">
      <h4> Images </h4>
      <div className="gallery-image">
        <div id={selectedImage.id}><img src={selectedImage.mediaUrl}/></div>
      </div>
      <div className="image-thumbnail">
        {images.map((image) =>(
          <div key={image.id} onClick={onHandleSelectImage.bind(this, image)}>
            <h6> {image.title} </h6>
            <img src={image.mediaUrl}/>
          </div>
        ))}
      </div>
    </div>
  )
};

GalleryDisplay.propTypes = {
  images: PropTypes.array.isRequired,
  selectedImage: PropTypes.object,
  onHandleSelectImage: PropTypes.func.isRequired
};

export default GalleryDisplay;
