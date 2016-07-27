import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/actionTypes';


class GalleryContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.handleLoadImage = this.handleLoadImage.bind(this);

    };
handleLoadImage(e){
    e.preventDefault();
    this.props.actions.loadImages();
}

    render() {
        console.log(this.props.images, 'the images')
        const {images} = this.props;
        // renderconsole.log(this.props.actions, 'actions from the gallery components')
        return (
            <div>
                {images.map(image =>(
                    <div key={image.id}> {image.name} </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        images: state.images
    };
}

function mapStateToDispatch(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapStateToDispatch)(GalleryContainer);
