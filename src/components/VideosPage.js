import React, { PropTypes } from 'react';

const VideosPage = ({ videos, onHandleSelectVideo, selectedVideo }) => {
  return (
    <div className="col-md-6">
      <h4> Videos </h4>
      <div className="gallery-image">
        <div id={selectedVideo.id}>
          <h6 className="title">{selectedVideo.description}</h6>
          <video width="500" height="500" controls src={selectedVideo.mediaUrl} type="video/mp4" alt="selected media" />
        </div>
      </div>
      <div className="image-thumbnail">
        {videos.map(video => (
          <div key={video.id} onClick={onHandleSelectVideo.bind(this, video)}>
            <h6> {video.title} </h6>
            <video width="150" height="150" controls src={video.mediaUrl} type="video/mp4" alt="select media" />
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
