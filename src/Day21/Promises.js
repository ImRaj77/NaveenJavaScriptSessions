
// resolve is manadatory
// reject is Not manadatory to use reject while we assume it will start anyday
function startMachine(){
    return new Promise( (resolve) => {           
        setTimeout( () => {
            console.log('1. Machine started');
            resolve();
        }, 2000);
    }); 
}

function boilWater(){
    return new Promise( (resolve) => {           
        setTimeout( () => {
            console.log('2. Water boiled');
            resolve();
        }, 3000);
    }); 
}

function grindCofeeBeans(){
    return new Promise( (resolve) => {           
        setTimeout( () => {
            console.log('3. Grind coffee beans');
            resolve();
        }, 1500);
    }); 
}

function pourCup(){
    return new Promise( (resolve) => {           
        setTimeout( () => {
            console.log('4. pour in the cup');
            resolve();
        }, 2000);
    }); 
}

function serveCoffe(){
    return new Promise( (resolve) => {           
        setTimeout( () => {
            console.log('5. Serve coffee');
            resolve();
        }, 3000);
    }); 
}

// THis is the best version of writing the callback with Promises - - no callback hell
startMachine()
        .then( () => boilWater() )
        .then( () => grindCofeeBeans() )
        .then( () => pourCup() )
        .then( () => serveCoffe() )
        .then( () => console.log('Your coffe is ready... enjoy your coffee...!'))
        .catch( (error) => console.log(error));

// callback hell --> Promises chain --> async , await

// the above version also we can improve by using the async and await concept

// function with resolve always...
function getNumber(){
    return Promise.resolve(100);
}
let n1 = getNumber();
console.log(n1);                                        // Promise { 100 }
getNumber().then( result => console.log(result));       // 100


// functon with only rejection...
function getBrowserError() {
    return Promise.reject('Browser could nopt find... 500 Internal error..');
}
getBrowserError().catch( (error) => console.log(error));


// always return a pizzaa with a resolve promise
function getPizza(){
    return new Promise( (resolve) => {
        resolve('Veg Pizza . . . .')
    } );
}
getPizza().then( (result) => console.log(result));


// resolve should be first parameter in any case...
function getPizza(){
    return new Promise( (resolve, reject) => {
        reject('Veg Pizza . . . Not Found.')
    } );
}
getPizza().catch( (error) => console.log(error));