const request = require('request')
const forecast = (latitude,longitude,callback) =>{
    const url = 'https://api.darksky.net/forecast/98c15c9f9e51203debd808d96d3709a3/' + latitude +','+ longitude + '?units=si'
    request({url, json:true}, (error, {body}) => {
        if (error) { 
            callback('Unable to connect to weather services', undefined)
                   
        } else if (body.error){
            callback('Unable to find location. Try another search')
        } else{
            callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +
            ' degrees out. There is ' + body.currently.precipProbability + '% chance of rain and the wind speed is' + body.currently.windSpeed + 'mph'
            )
             }
       

    })
}
module.exports = forecast