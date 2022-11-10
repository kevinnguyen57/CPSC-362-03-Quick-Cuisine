import { MY_API_KEY } from './config.js';

const searchBar = document.getElementById('searchBar').value;
const options = {
	method: 'GET',
    headers: {
		'X-RapidAPI-Key': MY_API_KEY,
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

fetch('https://edamam-recipe-search.p.rapidapi.com/search?q=' + searchBar, options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		console.log(response.q);
	})
	.catch(err => console.error(err));
