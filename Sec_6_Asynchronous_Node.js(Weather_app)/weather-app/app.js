const request = require('request');

const url = 'https://api.weatherstack.com/current?access_key=d559e719faab07310756a2f1c6c6967d&query=Kolkata&units=m';

request({url:url, json:true}, (error,response)=> {  // json:true means telling it is already in json format so no need to parse
    const data = response.body;

    console.log(data.current.weather_descriptions[0] +' It is currently ' + data.current.temperature + ' degrees out. It feels like ' + data.current.feelslike +' degrees out.');
})

/* Goal: print a small forcust for the user
print : weather_descriptions +"It is currently 20 degrees out. feels like 22 degrees out"
*/