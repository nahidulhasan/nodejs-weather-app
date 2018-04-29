
const argv = require('yargs').argv;
const weather = require('./weather');


let city = argv.c || 'dhaka';

weather.get(city);
