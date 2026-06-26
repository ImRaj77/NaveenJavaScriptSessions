
function getNumber() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(1000);
        }, 2000);
    });
};

function getTrainerName() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Naveen');
        }, 3000);
    });
};

function getResponseCode() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('200 Okay...');
        }, 1000);
    });
};

// 1. Promise.all() ---> All opr nothing
// waits for ALL Promises to succeed. If even one fails.... the whole thing fails immediately.. 

//Promise.all([p1, p2, p3])

// Promise.all( [ getNumber(), getTrainerName(), getResponseCode() ])
//         .then( result => console.log('All resolved:', result))
//         .catch( error => console.log('Failed..', error));

let [a,b,c] = await Promise.all( [ getNumber(), getTrainerName(), getResponseCode() ]);
console.log(a,b);
console.log(a,b,c);

// All resolved: [ 1000, 'Naveen', '200 Okay...' ]
// if any of the Promise is failed the failed rejection will be the output
// if two are getting rejected the first Promise will be getting returned as output 
// if all the promises are getting rejected the first Promise which gets called sequentially willl be resulted as output

// Mostly the output sequence will be followed as per the sequential array called in Promise.all()
// the first called sequence will give output

console.log('-----');
// 2. Promise.race() --> Who is finishing the finish line..
// Promise.race( [ getNumber(), getTrainerName(), getResponseCode() ])
//         .then( result => console.log('All resolved:', result))
//         .catch( error => console.log('Failed..', error));
// whoever is winning the race will be resulted first

// 3. Promise.allSettled() --> Tell me everything
// wait for all the promises to finish .. either resolved or rejected
// Promise.allSettled( [ getNumber(), getTrainerName(), getResponseCode() ])
//         .then( result => console.log('All resolved:', result))
//         .catch( error => console.log('Failed..', error));

// the calling sequence will be given // getNumber(), getTrainerName(), getResponseCode()
// All resolved: [
//   { status: 'fulfilled', value: 1000 },
//   { status: 'rejected', reason: 'Naveen' },
//   { status: 'rejected', reason: '200 Okay...' }
// ]

// 4. Promise.any()  --> I just need one winner
// returns the first Promise which got succeed... ignores the failures...
// Promise.any( [ getNumber(), getTrainerName(), getResponseCode() ])
//         .then( result => console.log('All resolved:', result))
//         .catch( error => console.log('Failed..', error));
// All resolved: 200 Okay... 
// in case of all rejections it will give an error with reason as below:
//Failed.. [AggregateError: All promises were rejected] {
//   [errors]: [ 1000, 'Naveen', '200 Okay...' ]
// }