import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCbqBUuIrWH74oikNsxj35eOPJ2YNT5h3A';



class App extends Component {

	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null 
		};
		// do initial search so that before any search sth can show on screen
		this.videoSearch('surfboards');

		
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos)=>{
	       this.setState({ 
	       	    videos: videos,
	       	    selectedVideo: videos[0] 
	       	});
	       // ES6 syntax sugar this.setState({ videos }) for ({videos: videos}), only works when key and variable name are the same
        });
	}

	render(){

		return(
				<div>

					<SearchBar onSearchTermChange = {term => this.videoSearch(term)}/>
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList 
						onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
						videos = { this.state.videos} />

				</div>
		)

	}
	
}

ReactDOM.render(<App/>, document.querySelector('.container'));