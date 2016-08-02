import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../styles/gallery.css';
import * as Actions from '../actions/imageActions';
// import GalleryDisplay from '../components/GalleryDisplay'


export default class GalleryContainer extends Component {

  constructor() {
    super();
    this.state = {
      query: 'rain'
    };
    this.handleFetchUnsplash = this.handleFetchUnsplash.bind(this);
  }

  handleSelect(selectedImage) {
    this.props.actions.selectedImage(selectedImage);
  }

  handleFetchUnsplash(e) {
    e.preventDefault();
    console.log('this is the place a', this.state.query);
    if (this.query !== null) {
      this.props.actions.unsplashAction(this.query.value);
      console.log(this.query.value, 'query attribute');
    }
  }

  // componentDidMount(){
  //   console.log(this.props, 'this is the day going')
  //const me =  this.props.actions.loadImages();
  //   console.log(me)
  // }

  render() {
    const {images, selectedImage} = this.props; // destructuring images and selectedImages for this.props for readability
    return (
      <div className="image-gallery">
        <div className="gallery-image">
          <div id={selectedImage.id}><img src={selectedImage.mediaUrl}/></div>
        </div>
        <div>
          <input
            type="text"
            ref={(ref) => this.query = ref}
          />
          <input
            type="submit"
            value="Unsplash Button"
            onClick={this.handleFetchUnsplash}/>
        </div>
        <div className="image-thumbnail">
          {images.map((image) =>(
            <div key={image.id} onClick={this.handleSelect.bind(this, image)}>
              <h6> {image.title} </h6>
              <img src={image.mediaUrl}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

GalleryContainer.propTypes = {
  images: PropTypes.array.isRequired
};

const mapStateToProps = ({images}) => {
  return {
    images: images[0],
    selectedImage: images.selectedImage
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
