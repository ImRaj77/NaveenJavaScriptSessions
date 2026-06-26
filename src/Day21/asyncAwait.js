
// Async - Await - Keywords - Just a syntax on top of JS Promises to improve the callback and Promises
// to avid pyramid of doom...

// async - used with function... ---> It will always return a promise
// await - used with steps...    --->  

async function printing() {
    console.log("Hello, Printing");
}
printing();         // function is returning a Promise

// with async - it will return promise
async function getNumber() {
    return 100;
}
getNumber().then( t1 => console.log(t1));             // 100
// instead of above -- we write it with await
let t1 = await getNumber();
console.log(t1);

// async function we should always call with await like we did in above step


async function getUser() {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve({name : 'Tom', age : 30})
        }, 2000);
    });
}
let user = await getUser();
console.log(user);


//
async function getTrainer(){
    return 'Naveen';
}

let trnrName = await getTrainer();
console.log(trnrName);

console.log(' - - - - -- - - ');

function startMachine(){
    return new Promise( (resolve) => {           
        setTimeout( () => {
            console.log('1. Machine started');
            resolve(true);
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

async function makeCoffee() {
    try{
        let flag = await startMachine();
        console.log(flag);
        await boilWater();
        await grindCofeeBeans();
        await pourCup();
        await serveCoffe();
        console.log('Your coffee is ready ... Enjoy it.');
    } 
    catch(error){
        console.log(error);
    } 
    finally {
        console.log('Close the DB');
    }
    
}

await makeCoffee();

// async - await --> better version
// 1. if a function is returned with async it's always returns a Promise --> call it using await
// 2. If a function is returning a Promise (resolve, reject) -- call it using await
// 3. We Should't write AWAIT without ASYNC function
// 4. async functio -- it's not mandatory to have await step -- will always return promise
// 5. if in a function you have await steps then that function should be async


async function pop() {
    console.log('Hello');
    await boilWater();
}
pop();