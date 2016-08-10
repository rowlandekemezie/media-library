import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/gallery.css';
import * as Actions from '../actions/mediaActions';
import GalleryDisplay from '../components/GalleryDisplay';


class MediaGalleryPage extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
  }

  componentDidMount() {
    console.log('component die mount')
    console.log(this.props.actions, 'action s in component did mount')
    this.props.actions.flickrImagesAction();
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
    const { images, selectedImage } = this.props;
    return (
      <div>
        {images ? <div>
          <div>
            <input
              type="text"
              ref={(ref) => (this.query = ref)}
            />
            <input
              type="submit"
              value="Search Images"
              onClick={this.handleSearch}
            />
          </div>
          <GalleryDisplay
            images={images}
            onHandleSearch={this.handleSearch}
            selectedImage={selectedImage}
            onHandleSelectImage={this.handleSelectImage}
          />
        </div> : 'loading ....'}
      </div>
    );
  }
}

MediaGalleryPage.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = ({ images, videos }) => ({
  images: images[0],
  selectedImage: images.selectedImage,
  videos });

const mapStateToDispatch = (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) });

export default connect(
  mapStateToProps,
  mapStateToDispatch)(MediaGalleryPage);
