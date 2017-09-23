import React from 'react';

const VideoDetail = ({video})=>{
	// do not need to store any state in this component
	// so we just use a functional component not a class component
	// const url = 'https://www.youtube.come/embed/' + videoId; ES6 below:
	if(!video){
		return <div> Loading...</div>;
	}


	const videoId = video.id.videoId;

	const url = `https://www.youtube.com/embed/${videoId}`; 
	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className = "embed-responsive-item" src = {url} ></iframe>
			</div>

			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>

		)

}

export default VideoDetail;