 const weather = require('./weather');

const argv = require('yargs').argv;

let city = argv.c || 'dhaka';

weather.get(city);
