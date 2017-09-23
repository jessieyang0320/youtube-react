import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyCbqBUuIrWH74oikNsxj35eOPJ2YNT5h3A';

YTSearch({key: API_KEY, term:'hello'}, function(data){
	console.log(data);
})

const App = ()=> {
	return(
		<div>

			<SearchBar />
		</div>
		)
}

ReactDOM.render(<App/>, document.querySelector('.container'));