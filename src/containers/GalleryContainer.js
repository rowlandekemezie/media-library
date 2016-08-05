import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/gallery.css';
import * as Actions from '../actions/mediaActions';
import GalleryDisplay from '../components/GalleryDisplay'


export default class GalleryContainer extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
  }

  handleSelectImage(selectedImage) {
    this.props.actions.selectImageAction(selectedImage);
  }

  handleSearch(event) {
    event.preventDefault();
    if (this.query !== null) {
      this.props.actions.searchMediaAction(this.query.value);
      this.query.value = '';
    }
  }

  render() {
    const {images, selectedImage} = this.props; // destructuring images and selectedImages for this.props for readability
    return (
      <div>
        <div>
          <input
            type="text"
            ref={(ref) => this.query = ref}/>
          <input
            type="submit"
            value="Search Images"
            onClick={this.handleSearch}/>
        </div>
        <GalleryDisplay
          images={images}
          onHandleSearch={this.handleSearch}
          selectedImage={selectedImage}
          onHandleSelectImage={this.handleSelectImage}/>
      </div>
    )
  }
}

GalleryContainer.propTypes = {
  images: PropTypes.array.isRequired
};

const mapStateToProps = ({images, videos}) => {
  console.log(videos, 'videos that returns from the api calls');
  console.log(images, 'this is the images or videos form the call')
  return {
    images: images[0],
    selectedImage: images.selectedImage,
    videos: videos
  };
};

function mapStateToDispatch(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapStateToDispatch)(GalleryContainer);
