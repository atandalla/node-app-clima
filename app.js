const clima = require('./controlador/clima');
const colors = require('colors');

const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let ciudad = argv.ciudad
clima.getClima(ciudad)
    .then(mensaje => {
        for (let clima of mensaje) {
            console.log(colors.red.bgWhite.bold("APLICACION DEL CLIMA"));
            if (clima.clima === 'Rain') {
                console.log(colors.blue.bgWhite(`El clima de ${ciudad} es: ${clima.clima}`));
            } else if (clima.clima === 'Clouds') {
                console.log(colors.cyan.bgWhite(`El clima de ${ciudad} es: ${clima.clima}`));
            } else if (clima.clima === 'Clear') {
                console.log(colors.green.bgWhite(`El clima de ${ciudad} es: ${clima.clima}`));
            } else if (clima.clima === 'Sunny') {
                console.log(colors.yellow.bgWhite(`El clima de ${ciudad} es: ${clima.clima}`));
            }

            console.log(colors.black.bgWhite(`La Temperatura de ${ciudad} es: ${clima.temp}`));
            console.log(colors.black.bgWhite(`La Temperatura Mínima de ${ciudad} es: ${clima.temp_min}`));
            console.log(colors.black.bgWhite(`La Temperatura Máxima de ${ciudad} es: ${clima.temp_max}`));
            console.log(colors.black.bgWhite(`La Presión de ${ciudad} es: ${clima.pressure}`));
            console.log(colors.black.bgWhite(`La Humedad de ${ciudad} es: ${clima.humidity}`));

        }

    })
    .catch(err => {
        console.log(err)
    })


//Tarea: 1. Modificar el codigo para obtener un error coherente
//2. Cambiar para que nos muestre la temp en grados centigrados 
//3. Mostrar los demas datos del clima y utilizar colores 
//3.1 si es nublado, un color: soleado, otro color, etc
//4. Subir  el codigo a GITHUB