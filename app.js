const request = require('request')

// const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=fb6bf32fca85aaac663b3c4dc005c1e9' 
const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'

request({ url: url}, (error, response)=>{
    const data = JSON.parse(response.body)
    console.log(data);
})

