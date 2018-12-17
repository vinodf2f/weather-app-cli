const request = require('request');

let geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {

        let encodedAddress = encodeURIComponent(address);
        let key = 'AIzaSyBsMMpmQY8OFjSpdNC_sEcOtWoQOGaOiXM';

        request(
            {
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`,
                json: true
            }, (error, response, body) => {
                if (error) {
                    reject('Unable to connect');
                } else if (body.status === 'ZERO_RESULTS') {
                    reject('Unable to find that address');
                } else if (body.status === 'OK') {
                    resolve(
                        {
                            address: body.results[0].formatted_address,
                            latitude: body.results[0].geometry.location.lat,
                            longitude: body.results[0].geometry.location.lng
                        });
                }

            });
    });

};

geocodeAddress('431715').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});