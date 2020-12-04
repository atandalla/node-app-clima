const axios = require('axios');

const apiKey = '2932aa5574a548258be83fb735816d18'

const getClima = async(ciudad) => {
    try {
        const datosClima = []
        const ciudadURI = encodeURI(ciudad)
        const respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudadURI}&appid=${apiKey}`)

        let clima = respuesta.data.weather[0].main
        let temp = respuesta.data.main.temp
        let temp_min = respuesta.data.main.temp_min
        let temp_max = respuesta.data.main.temp_max
        let pressure = respuesta.data.main.pressure
        let humidity = respuesta.data.main.humidity

        let climaCity = {
            clima,
            temp,
            temp_min,
            temp_max,
            pressure,
            humidity
        }

        datosClima.push(climaCity)

        return datosClima;
    } catch (error) {
        console.log(`La ciudad de ${ciudad} es incorrecta`);
    }
}

module.exports = {
    getClima
}