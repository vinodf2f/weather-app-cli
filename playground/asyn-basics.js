const  fs = require('fs');
console.log('Starting app');


setTimeout(() => {
    console.log('Inside Callback');
}, 2000);

setTimeout(() => {
    console.log('Inside zero Callback');
}, 0);


console.log('Finishing App');
