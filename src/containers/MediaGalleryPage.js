import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/mediaActions';
import PhotosPage from '../components/PhotosPage';
import VideosPage from '../components/VideosPage';
import '../styles/style.css';


class MediaGalleryPage extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
  }

  handleSelectImage(selectedImage) {
    this.props.actions.selectImageAction(selectedImage);
  }

  handleSelectVideo(selectedVideo) {
    this.props.actions.selectVideoAction(selectedVideo);
  }

  handleSearch(event) {
    event.preventDefault();
    if (this.query !== null) {
      this.props.actions.searchMediaAction(this.query.value);
      this.query.value = '';
    }
  }

  render() {
    const { images, selectedImage, videos, selectedVideo } = this.props;
    return (
      <div className="container-fluid">
        {images ? <div>
          <input
            type="text"
            ref={ref => this.query = ref}
          />
          <input
            type="submit"
            value="Search Library"
            onClick={this.handleSearch}
          />
          <div className="row">
            <PhotosPage
              images={images}
              selectedImage={selectedImage}
              onHandleSelectImage={this.handleSelectImage}
            />
            <VideosPage
              videos={videos}
              selectedVideo={selectedVideo}
              onHandleSelectVideo={this.handleSelectVideo}
            />
          </div>
        </div> : 'loading ....'}
      </div>
    );
  }
}

MediaGalleryPage.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = ({ images, videos }) => ({
  images: images[0],
  selectedImage: images.selectedImage,
  videos: videos[0],
  selectedVideo: videos.selectedVideo
});

const mapStateToDispatch = (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) });

export default connect(
  mapStateToProps,
  mapStateToDispatch)(MediaGalleryPage);
