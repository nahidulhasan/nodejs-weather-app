
const https = require('https');

const api = require('./api.json')



function printWeather(weather) {

  const message ='Current Temperature in ${weather.location.city} is ${weather.current_observation.temp_f} F';

  console.log(message);

}

function get(query) {

	const request = 
	https.get('https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json',
	response => {
		var body = "";

		response.on('data', chunk => {
			body += chunk;
		} );

		response.on('end', () => {

           const weather = JSON.parse(body);
           printWeather(weather);

		});
	});

}

module.exports.get = get;