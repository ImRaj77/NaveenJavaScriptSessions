
let user1 = {
    name : 'Vinay',
    age : 30,
    city : 'Pune',
    zip : 1212  
};

let user2 = {
    name : 'Manish',
    age : 35,
    city : 'Banglore',
    zip : 1232  
};

let user3 = {
    name : 'Pooja',
    age : 32,
    city : 'Delhi',
    zip : 12122  
};

console.log(user1);
console.log(user2);
console.log(user3);

console.log('------');
user1 = user2 ;
console.log(user1);
console.log(user2);
console.log(user3);

console.log('------');
user2 = user3 ;
console.log(user1);
console.log(user2);
console.log(user3);

console.log('------');
user3 = user1 ;
console.log(user1);
console.log(user2);
console.log(user3);

// user1 is not refered by anyone now
// GC will destroy the user1 as it's not referenced by anyone in the memory
// one object can be referenced by multiple (n) objects
// we can create object without reference as well but the gc will destroy it


let p1 = {
    name : 'Rohit',
    age : 31,
    city : 'Pune',
    zip : 12345
};
let p2 = p1;
console.log(p2);

p2.name = 'Virat';
p2.age = 37;
console.log(p1);
console.log(p2);
// The above is not clonnig


// one empty object will be created
let n1 = {};
// gc will not be able to destroy as it's referenced by n1. it's not de referenced
console.log(n1);                // {}

p1 = n1;
console.log(p1);                // {}
console.log(p2);                // { name: 'Virat', age: 37, city: 'Pune', zip: 12345 }

// GC will destroy the objects in below cases
// 1. null refernce
// 2. undefined reference
// 3. no reference