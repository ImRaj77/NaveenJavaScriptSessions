
// 2D Array

let num = [
    [1,2,3,4],
    [10,20,30,40],
    [100,200,300,400]
];

// 3 x 4  --> array

console.log(num[0][0]);         // 1
console.log(num[0][3]);         // 4
console.log(num[2][3]);         // 400
//console.log(num[3][3]);         // TypeError: Cannot read properties of undefined (reading '3')
console.log(num.length);        // 3 --> It will always gives you rows count
console.log(num);               // [ [ 1, 2, 3, 4 ], [ 10, 20, 30, 40 ], [ 100, 200, 300, 400 ] ]

console.log('--------');

// Iterate 2D array
for(let i=0; i<num.length; i++){
    for(let j=0; j<num[i].length; j++){
        //console.log(num[i][j]);
        process.stdout.write(num[i][j]+' ');
    }
    console.log('');
}

console.log('for ..of loop');
// print with the help og for ..of loop

for(let u of num) {
    for(let v of u){
        process.stdout.write(v+ ' ');
    }
    console.log('');
}


// jagged array: only in Java script
let data =[
    [1, 2, 3, 4],
    [10, 20, 30],
    [100, 200],
    [1000]
];
console.log(data);
for(let u of data) {
    for(let v of u){
        process.stdout.write(v+ ' ');
    }
    console.log('');
}


console.log('-----');
let prods = ['MacBook Pro', 'iMac', 'iPhone17', 'Canon', 'MacBook Air'];
// reverse orde using for ..of loop
let count = prods.length - 1;
for(let e of prods){
    e = count;
    console.log(prods[e]);
    count-- ;
}


// for ..in loop to print reverse
let products = ['MacBook Pro', 'iMac', 'iPhone17', 'Canon', 'MacBook Air'];
console.log(typeof products);


// 1D array --> single for loop
// 2D array --> 2 nested for loops
// 3D array --> 3 nested for loops
// nD array --> n nested for loops
