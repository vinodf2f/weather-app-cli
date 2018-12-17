const request = require('request');
let weatherKey = 'DARKSKYAPIKEY';
var getWeather = (lat, long , callback) => {
    request({
        url : `https://api.darksky.net/forecast/${weatherKey}/${lat},${long}`,
        json : true
    }, (error,response, body) => {
        if (error) {
            callback('unable to connect forecast.io server ');
        }
        else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
            
        } else if (!error && response.statusCode === 200) {
            callback(undefined, {
              temperature:  body.currently.temperature,
              apparentTemperature: body.currently.apparentTemperature
            });
        }
    })
};

module.exports.getWeather = getWeather;

