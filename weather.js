
const https = require('https');

const api = require('./api.json')

function get(query) {

	const request = 'https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json',

	response => {

		let body = "";

		response.on('data', chunk =>{
			body += chunk;
		});

		response.on('end', () => {

			cosole.log(body);
		});
	};

}