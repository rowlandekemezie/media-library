import React, { PropTypes } from 'react';

const VideosPage = ({ videos, onHandleSelectVideo, selectedVideo }) => (
  <div className="col-md-6">
    <h2>Videos</h2>
    <div className="select-video">
      <div id={selectedVideo.id}>
        <h6 className="title">{selectedVideo.description}</h6>
        <video controls src={selectedVideo.mediaUrl} alt={selectedVideo.title} />
      </div>
    </div>
    <div className="video-thumbnail">
      {videos.map(video => (
        <div key={video.id} onClick={onHandleSelectVideo.bind(this, video)}>
          <video controls src={video.mediaUrl} alt={video.description} />
        </div>
      ))}
    </div>
  </div>
);

VideosPage.propTypes = {
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  onHandleSelectVideo: PropTypes.func.isRequired
};

export default VideosPage;
