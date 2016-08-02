import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../styles/gallery.css';
import * as Actions from '../actions/imageActions';
// import GalleryDisplay from '../components/GalleryDisplay'


export default class GalleryContainer extends Component {

  constructor(props, context) {
    super();
    this.state = {
      query: 'rain'
    };
    this.getQueryParams = this.getQueryParams.bind(this);
  }

  handleSelect(selectedImage) {
    this.props.actions.selectedImage(selectedImage);
  }

  getQueryParams(e) {
    e.preventDefault();
    console.log('this is the place a', this.state.query);
    // const query = this.state.query;
    if (this.query !== null) {
      this.props.actions.unsplashAction(this.query.value);
      console.log(this.query.value, 'query attribute');
    }
    // this.setState({query})
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
            onClick={this.getQueryParams}/>
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

function mapStateToProps(state) {
  console.log(state, 'this is the state of things')
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
