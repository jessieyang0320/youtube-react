import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	// {video} as parameter is a syntax sugar for: use props as argument, then: const video = props.video
	//  may console.log({video}) to see what properties we have here
	
	const imageUrl = video.snippet.thumbnails.default.url;



	return(
		<li onClick = {()=> onVideoSelect(video)} className="list-group-item"> 
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src= { imageUrl }/>				
			    </div>

			    <div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>				
			    </div>

			</div>

		</li>
		)
};

export default VideoListItem;