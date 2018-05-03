## Node Js Weather App

[![npm version](https://badge.fury.io/js/nodejs-weather-app.svg)](https://badge.fury.io/js/nodejs-weather-app) ![npm](https://img.shields.io/npm/l/express.svg) [![Twitter](https://img.shields.io/twitter/url/https/github.com/nahidulhasan/nodejs-weather-app.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fnahidulhasan%2Fnodejs-weather-app)

Node Js Weather App is a simple module for obtaining weather information.

### Use as a CLI Tool

#### Prerequisite

You need to have [NodeJS](https://nodejs.org/en/) installed in your machine.

#### Add to CLI

* Clone the repository.
* Go to the repository folder and run the following command in your terminal:

```
npm link
```

#### Usage

Now you can just run the following in terminal:

```
weather
```

By default you'll get current weather of **_Dhaka_** City.

If you want to get weather of a different city, run:

```
weather -c CITY_NAME
```

### Use as a Library

#### Installation

```
npm install nodejs-weather-app
```

#### Usage

This library exposes two methods:

* `getWeather`, which will return a Promise
* `printWeather`, which will show the output as a readable message

For example, you can use the library like this:

```js
var nodejsWeatherApp = require('nodejs-weather-app');

nodejsWeatherApp.getWeather().then(val => {
	nodejsWeatherApp.printWeather(val);
});
```

If you don't specify any city and run the code, you will get Dhaka city temperature.

Output :

```
Current Temperature in Dhaka is 24.6°C
```

If you want to get specific city temperature, then pass the city name as a parameter of `getWeather` method:

```js
var nodejsWeatherApp = require('nodejs-weather-app');

nodejsWeatherApp.getWeather('New York').then(val => {
	nodejsWeatherApp.printWeather(val);
});
```

Output :

```
Current Temperature in New York is 7.82°C
```

Basically, when the `getWeather` Promise will be resolved it will give a detailed **_weather_** object. So, you can easily modify it if necessary.

Like following:

```js
var nodejsWeatherApp = require('nodejs-weather-app');

nodejsWeatherApp.getWeather().then(val => {
	printWeather(val);
});

function printWeather(weather) {
	let message = `Temperature in ${weather.name} is ${weather.main.temp}°C`;

	console.log(message);
}
```

If you want to see the full **_weather_** object, try this:

```js
function printWeather(weather) {
	console.log(weather);
}
```

Output :

```
{
  "coord": {
    "lon": 85.17,
    "lat": 26.67
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 20.73,
    "pressure": 1016.99,
    "humidity": 92,
    "temp_min": 20.73,
    "temp_max": 20.73,
    "sea_level": 1023.25,
    "grnd_level": 1016.99
  },
  "wind": {
    "speed": 4.26,
    "deg": 98.5038
  },
  "clouds": {
    "all": 68
  },
  "dt": 1525197016,
  "sys": {
    "message": 0.002,
    "country": "IN",
    "sunrise": 1525131665,
    "sunset": 1525179120
  },
  "id": 1273043,
  "name": "Dhaka",
  "cod": 200
}
```

### License

Node Js Weather App is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
