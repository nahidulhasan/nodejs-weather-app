const weather = require('./weather');

const query = process.argv.slice(2).join("-").replace('',"-");

weather.get(query);