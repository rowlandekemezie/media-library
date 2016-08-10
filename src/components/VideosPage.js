import React, { PropTypes } from 'react';

const VideosPage = ({ videos, onHandleSelectVideo, selectedVideo }) => {
  return (
    <div className="image-gallery">
      <h4> Videos </h4>
      <div className="gallery-image">
        <div id={selectedVideo.id}><video width="400" height="300" controls> <source src={selectedVideo.mediaUrl} type="video/mp4" alt="selected media" /> </video></div>
      </div>
      <div className="image-thumbnail">
        {videos.map(video => (
          <div key={video.id} onClick={onHandleSelectVideo.bind(this, video)}>
            <h6> {video.title} </h6>
            <video width="150" height="150" controls> <source src={video.mediaUrl} type="video/mp4" alt="select media" /></video>
          </div>
        ))}
      </div>
    </div>
  );
};

VideosPage.propTypes = {
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  onHandleSelectVideo: PropTypes.func.isRequired
};

export default VideosPage;
