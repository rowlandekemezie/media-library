import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../styles/gallery.css';
import * as Actions from '../actions/imageActions';
// import GalleryDisplay from '../components/GalleryDisplay'


class GalleryContainer extends Component {

  handleSelect(selectedImage) {
    this.props.actions.selectedImage(selectedImage);
  }

  render() {
    const {images, selectedImage} = this.props;
    return (
      <div className="image-gallery">
        <div className="gallery-image">
          <div id={selectedImage.id}><img src={selectedImage.watchHref}/></div>
        </div>
        <div className="image-scroller">
          {images.map((image) =>(
            <div key={image.id} onClick={this.handleSelect.bind(this, image)}>
              <h6> {image.title} </h6>
              <img src={image.watchHref}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

GalleryContainer.propTypes = {
  images: PropTypes.array
};

function mapStateToProps(state) {
  const {images} = state; // destructuring state from Redux store.
  return {
    images: images[0],
    selectedImage: images.selectedImage
  };
}

function mapStateToDispatch(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapStateToDispatch)(GalleryContainer);
