//the below code shows the asynchronous nature of JavaScript
console.log('Weather App started')

setTimeout(() => {
    console.log('Fetching weather data...')
}, 2000)

setTimeout(() => {
    console.log('Weather data fetched successfully!')
}, 0)

console.log('Weather App finished') 


/*
☁  weather-app [main] ⚡  node app.js
Weather App started
Weather App finished
Fetching weather data...
Weather data fetched successfully!
*/