
## Node Js Weather App

[![npm version](https://badge.fury.io/js/nodejs-weather-app.svg)](https://badge.fury.io/js/nodejs-weather-app)

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

If you don't specify any city and run code, you will get dhaka city temperature.

Output :

```
Current Temperature in Dhaka is 24.6°C

```

If you want to specify specific city, then call in this way 

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

If you want to input from terminal, then call in this way

``` js
var nodejsWeatherApp = require("nodejs-weather-app");


const argument = process.argv.slice(3).join(' ');

nodejsWeatherApp.getWeather(argument).then( val => {
       nodejsWeatherApp.printWeather(val);
   });

```

Suppose your file name is app.js and you want to get temperature of sydney.Run the command

```
node app.js -c sydney

```

Output:

``` 
Current Temperature in Sydney is 14.8°C

```

If you want to modify output in your own way then call this way

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


### License

Node Js Weather App is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)