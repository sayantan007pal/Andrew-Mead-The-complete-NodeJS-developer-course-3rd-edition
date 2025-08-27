const request = require('request');

const url = 'https://api.weatherstack.com/current?access_key=d559e719faab07310756a2f1c6c6967d&query=Kolkata';

request({url:url}, (error,response)=> {
    const data = JSON.parse(response.body);
    console.log("whole response : ",data)
    console.log("Current :", data.current)
})