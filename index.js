const api = require('./api.json');
const request = require('request');


if(require.main == module) {
    const argument = process.argv.slice(3).join(' ');
    const city = argument || 'dhaka';

    get(city);
}

function printWeather(weather) {
    let message =`Current Temperature in ${weather.name} is ${weather.main.temp}°C`;

    console.log(message);
}

function printError(error) {
    console.error(error.message);
}

function get(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api.key}`

    try{
        request(url, function (error, response, body) {

            if(response.statusCode === 200){

                try{
                    const weather = JSON.parse(body);

                    if(weather.name) {
                        printWeather(weather);
                    } else {
                        const queryError = new Error(`The location ${city} was not found`);
                        printError(queryError);
                    }

                } catch(error) {
                    printError(error);
                }

            } else {
                const statusCodeError =
                    new Error(`There was an error getting the message for ${city}(StatusCode ${response.statusCode})`);
                printError(statusCodeError);
            }

        });

    } catch(error) {
        printError(error);
    }
}

module.exports.get = get;