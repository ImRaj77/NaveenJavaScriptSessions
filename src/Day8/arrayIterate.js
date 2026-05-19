
let products = ['MacBook Pro', 'iMac', 'iPhone17', 'Canon', 'MacBook Air'];
console.log(products);

// 1.index based loop
for (let index = 0; index < products.length; index++) {
   console.log(products[index]);
   if(products[index] === 'iPhone17'){
        console.log(products[index]+' : found the product');
        break;
   }
}

console.log('-----------');
// 2. for ..of loop ---> Simplest way to write the for loop
for(let i of products){
    console.log(i);
    if(i === 'iPhone17'){
        console.log('Product found');
        break;
    }
}

console.log('-----------');
// Reverse order print 
for(let i=products.length-1; i>=0; i--){
    console.log(products[i]);
}

// Reverse order print -- using for ..of loop
// for ..of loop always goes in forward / ascending direction of indexes


let num = [1,2,3,4,5]
for(let e of num){
    console.log(e);
}


let empData = ['Tom', 34.44, true, 101, 'Pune'];
empData[-1] = 100;
empData[-100] = 200;
console.log(empData);
for(let i of empData){
    console.log(i);
}


// for ..in loop
let prods = ['MacBook Pro', 'iMac', 'iPhone17', 'Canon', 'MacBook Air'];
for(let e in prods) {
    console.log(e);         // It will print indexes
}

console.log('-----');
for(let e in prods) {
    console.log(e, ' = ', prods[e]);         // It will print indexes
}