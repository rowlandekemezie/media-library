import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../styles/gallery.css';
import * as Actions from '../constants/actionTypes';


class GalleryContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      images: [...props.images],
      selectedImage: [...props.images][0]
    };
    this.handleSelect = this.handleSelect.bind(this);
  };

  handleSelect(selectedImage) {
    // console.log(selectedImage, 'This is the handle image selected')
    // this.setState({selectedImage})
  }

  componentDidMount() {
    const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
    const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`;

  console.log(this.props.images, 'component did mount')
    fetch(API_ENDPOINT).then((response) => {
      return response.json().then((json) => {
        const images = json.photos.photo.map(({farm, server, id, secret}) => {
          return {
            id: id,
            watchHref: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
          }
        });
        this.setState({images, selectedImage:images[0]})
      })
    })
  }

  render() {
    const {images, selectedImage} = this.state;
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
