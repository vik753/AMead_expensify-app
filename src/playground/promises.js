const promise = new Promise((resolve, reject) => {
    // resolve({
    //     name: 'Dan Brown',
    //     age: 45
    // });
    reject('Something went wrong!');
});

promise.then((data) => {
    console.log(data);
}).catch((err) => console.log('Error:', err));