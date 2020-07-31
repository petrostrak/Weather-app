const request = require('request')

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Athens,gr&appid=fb6bf32fca85aaac663b3c4dc005c1e9' 

request({ url: url, json: true}, (error, response)=>{
    console.log(response);
    // const data = JSON.parse(response.body)
    // console.log(data);
})

