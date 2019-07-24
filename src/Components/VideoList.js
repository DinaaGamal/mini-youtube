import React from 'react';
import VideoItem from './VideoItem';
const VideoList = ({ videos, onVideoSelected }) => {
	const videoList = videos.map((video) => {
		return <VideoItem key={video.id.videoId} video={video} onVideoSelected={onVideoSelected} />;
	});
	return <div className="ui relax divided list">{videoList}</div>;
};
export default VideoList;
