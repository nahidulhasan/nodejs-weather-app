
## Node Js Weather App

[![npm version](https://badge.fury.io/js/nodejs-weather-app.svg)](https://badge.fury.io/js/nodejs-weather-app)

![npm](https://img.shields.io/npm/l/express.svg)


Node Js Weather app is a simple module for obtaining weather information


### Installation

```
npm install nodejs-weather-app
```


### Usage

``` js

var nodejsWeatherApp = require("nodejs-weather-app");

nodejsWeatherApp.getWeather().then( val => {
       nodejsWeatherApp.printWeather(val);
   });

```

If you don't specify any city and run the code, you will get Dhaka city temperature.

Output :

```
Current Temperature in Dhaka is 24.6°C
```

If you want to specific city temperature, then call in this way 

``` js

var nodejsWeatherApp = require("nodejs-weather-app");

nodejsWeatherApp.getWeather('New York').then( val => {
       nodejsWeatherApp.printWeather(val);
   });

```

Output :

```
Current Temperature in New York is 7.82°C
```

If you want to give input from the terminal, then call this way

``` js
var nodejsWeatherApp = require("nodejs-weather-app");


const argument = process.argv.slice(3).join(' ');

nodejsWeatherApp.getWeather(argument).then( val => {
       nodejsWeatherApp.printWeather(val);
   });

```

Suppose your file name is app.js and you want to get the temperature of Sydney.Run the command

```
node app.js -c Sydney
```

Output:

``` 
Current Temperature in Sydney is 14.8°C
```

If you want to modify the output in your own way then call this way

``` js

var nodejsWeatherApp = require("nodejs-weather-app");

nodejsWeatherApp.getWeather().then( val => {
       printWeather(val);
   });

function printWeather(weather) {
       let message =`Temperature in ${weather.name} is ${weather.main.temp}°C`;

       console.log(message);
  }

```

If you want to see weather info in details

``` js

  function printWeather(weather) {
       console.log(weather);
  }

```

Output :

```
{ coord: { lon: 85.17, lat: 26.67 },
  weather:
   [ { id: 803,
       main: 'Clouds',
       description: 'broken clouds',
       icon: '04n' } ],
  base: 'stations',
  main:
   { temp: 20.73,
     pressure: 1016.99,
     humidity: 92,
     temp_min: 20.73,
     temp_max: 20.73,
     sea_level: 1023.25,
     grnd_level: 1016.99 },
  wind: { speed: 4.26, deg: 98.5038 },
  clouds: { all: 68 },
  dt: 1525197016,
  sys:
   { message: 0.002,
     country: 'IN',
     sunrise: 1525131665,
     sunset: 1525179120 },
  id: 1273043,
  name: 'Dhaka',
  cod: 200 }

```


### License

Node Js Weather App is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
