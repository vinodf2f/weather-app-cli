const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to Fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAddress = encodeURIComponent(argv.address);
let key = 'AIzaSyCvp7DqK9vqqI3iAlTbLyur6BolLaZaXEI';

let geocodeUrl = `https://mapsgoogleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`;

axios.get(geocodeUrl).then((response) => {
    console.log(response.data);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers')
    }
    
})



 