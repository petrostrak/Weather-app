const request = require('request')

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Athens,gr&appid=fb6bf32fca85aaac663b3c4dc005c1e9' 

request({ url: url, json: true}, (error, response)=>{
    console.log(`The temperature in Athens, Greece now is ${(Math.round(response.body.main.temp) / 10)} Celsius. The humidity is ${response.body.main.humidity}%. The wind speed is ${response.body.wind.speed} mph.`);
    // const data = JSON.parse(response.body)
    // console.log(data);
})

