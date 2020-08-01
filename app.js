const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Tokyo', (error, data) => {
    console.log('error', error);
    console.log('data', data);
})

forecast(139.77, 35.68, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})