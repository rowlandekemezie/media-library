import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../styles/gallery.css';
import * as Actions from '../actions/actionTypes';


class GalleryContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  };

  render() {
    const {images} = this.props;
    return (
      <div className="">
        <div className="">
          {images.map(image =>(
            <div key={image.id}>
              <h1> {image.title} </h1>
              <img src={image.watchHref}/>
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
  images: PropTypes.array.isRequired
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
