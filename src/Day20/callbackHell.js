
// callback hell - pyramid of doom...

function startMachine(callback){
    setTimeout( () => {
        console.log('Step 1');
        callback();
    }, 2000);
}

function boilWater(callback){
    setTimeout( () => {
        console.log('Step 2');
        callback();
    }, 3000);
}

function grindCofeeBeans(callback){
    setTimeout( () => {
        console.log('Step 3');
        callback();
    }, 4000);
}

function pourCup(callback){
    setTimeout( () => {
        console.log('Step 4');
        callback();
    }, 2000);
}

function serveCoffe(callback){
    setTimeout( () => {
        console.log('Step 5');
        callback();
    }, 1000);
}

// start coffe prep and serve
// callback Hell = Pyramid of doom..
// this is bad practice to write the callback code
startMachine( () => {
    boilWater( () => {
        grindCofeeBeans( () => {
            pourCup( () => {
                serveCoffe( () => {
                    console.log('Your coffee is ready... enjoy it.');
                })
            })
        })
    })
})


function getUserData(callback){
    console.log('fetching user from DB');

    setTimeout( () => {

        let user = {
            id : 101,
            name : 'Vaibhav',
            email : 'vbc@gmail.com',
            role : 'SDET'
        };

        callback(user);

    }, 4000);
}

getUserData( (user) => {
    console.log('user received....');
    console.log(user);
    console.log(user.name, user.id);
});