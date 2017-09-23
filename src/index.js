import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyCbqBUuIrWH74oikNsxj35eOPJ2YNT5h3A';



class App extends Component {

	constructor(props){
		super(props);

		this.state = { 
			videos: [] 
		};

		YTSearch({key: API_KEY, term:'surfboard'}, (videos)=>{
	       this.setState({ videos });
	       // ES6 syntax sugar for ({videos: videos}), only works when key and variable name are the same
        });
	}

	render(){

		return(
				<div>

					<SearchBar />
				</div>
		)

	}
	
}

ReactDOM.render(<App/>, document.querySelector('.container'));