import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../styles/gallery.css';
import * as Actions from '../actions/actionTypes';


class GalleryContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedImage: Object.assign({}, props.images)[0]
    };
    this.handleSelect = this.handleSelect.bind(this);
  };

  handleSelect(selectedImage) {
    console.log(selectedImage, 'This is the handle image selected')

  }

  render() {
    console.log(this.state.selectedImage);
    const {images} = this.props;
    const {selectedImage} = this.state;
    return (
      <div className="image-gallery">
        <div className="gallery-image">
          <div key={selectedImage.id}><img src={selectedImage.watchHref}/></div>
        </div>
        <div className="image-scroller">
          {images.map(image =>(
            <div key={image.id}>
              <h6> {image.title} </h6>
              <div key={image.id} onClick={this.handleSelect(image)}>
                <img src={image.watchHref}/>
              </div>
            </div>
          ))}
          <div>

          </div>
        </div>
      </div>
    )
  }
}

GalleryContainer.propTypes = {
  images: PropTypes.array
};

function mapStateToProps(state) {
  return {
    images: state.images
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
