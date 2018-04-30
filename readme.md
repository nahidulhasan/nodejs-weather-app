
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


### License

Node Js Weather App is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
