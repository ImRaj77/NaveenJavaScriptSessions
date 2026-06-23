
// Promises : 
// 1. Pending task (in progress)
// 2. Resolve -- fulfillment -- return the resource (Data)
// 3. Rejected -- reason (error reason)

// create a promise: using Promise object

let pizzaPromise = new Promise((resolve, resject) => {
    // do something here...
    let success = true;
    if(success){
        resolve('Pizza');
    } else {
        resject('Raining outside...');
    }
});

pizzaPromise
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally( () => console.log('close the application...'));
        
// then - when promise got resolved 
// catch - when promise is rejected
// finally - always being executed


//
function getUserInfo(userId){
    return new Promise( (resolve, reject) => {
        console.log('Fetching th euser data for...',userId);
        setTimeout( () => {
            if(userId <=0) {
                reject('Invalid userId...No content');
            } else {
                let user = {
                    id : userId,
                    name : 'Rajesh',
                    city : 'Pune'
                };
                resolve(user);
            }
        }, 5000);
    });

}

getUserInfo(-101)
        .then( (user) => console.log(user) )
        .catch( (error) => console.log(error) )
        .finally( () => console.log('Close the DB connection') );
