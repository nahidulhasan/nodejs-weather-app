
const https = require('https');

const api = require('./api.json')

function get(query) {

	const request = 'https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json',

	response => {

		let body = ""
	}

}