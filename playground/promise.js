let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be number');
            }
        }, 1500);
    });
};

asyncAdd(5, '7').then((res) => {
    console.log('results: ', res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('results: ', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});
// let somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        // resolve('hey, it worked');
//        reject('Unable to Promise');
//     }, 2500);

// });


// somePromise.then((message) => {
//     console.log('Success:',message);
// }, (errorMessage) => {
//     console.log('error ', errorMessage);
// })