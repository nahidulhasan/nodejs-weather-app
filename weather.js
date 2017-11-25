
const http = require('http');
const https = require('https');
const api = require('./api.json')



function printWeather(weather) {

  const message ='Current Temperature in ${weather.location.city} is ${weather.current_observation.temp_f} F';

  console.log(message);

}

function printError(error) {

	console.error(error.message);
}

function get(query) {

	const readableQuery = query.replace('_', ' ')

  try{
  	const request = 
	https.get('https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json',
	response => {

		if(response.statusCode === 200){

			var body = "";
			response.on('data', chunk => {
				body += chunk;
			} );

			response.on('end', () => {

				try{

					const weather = JSON.parse(body);

					if(weather.location){
						printWeather(weather);
					}else{
						const queryError = new Error('The location ${readableQuery} was not found');
					}
	                
				} catch(error) {
					printError(error);
				}

			});
  			
  		} else {
  			const statusCodeError = new Error('There was an error getting the message for ${readableQuery}.(${http.STATUS_CODES[response.statusCode]})');

  		}
	});

	request.on('error', 'printError');

  } catch (error){
  	printError(error);
  }
	

}

module.exports.get = get;