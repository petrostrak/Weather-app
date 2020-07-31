const request = require('request')

// const url = 'https://api.openweathermap.org/data/2.5/weather?q=Athens,gr&appid=fb6bf32fca85aaac663b3c4dc005c1e9' 

// request({ url: url, json: true}, (error, response)=>{
//     console.log(`The temperature in Athens, Greece now is ${(Math.round(response.body.main.temp) / 10)} Celsius. The humidity is ${response.body.main.humidity}%. The wind speed is ${response.body.wind.speed} mph.`);
//     // const data = JSON.parse(response.body)
//     // console.log(data);
// })

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGl0dHJhayIsImEiOiJja2RhaG5xajEwbmt6MnptaXp4enMydjJpIn0.E5-EUQVMQWA5_X4zyoL0kQ&limit=1'

request({ url:url, json: true }, (error, response) => {
    if(error){
        console.log('Unable to connect to Geocoding');
    } else if (response.body.features.length === 0){
        console.log('Unable to find location');
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude);
    }
})
