
// whenever we have to do some repeatative task then we need to use loops
// print 1 to 10 values
// 3 Major loops 
// while, for, do-while

// 1. while
let number = 1;
while (number <=20) {
    console.log(number);
    number++;
}

while (true) {
    console.log('Welcome to RAL');
    break;
}

// Unreachable code or dead code
while (false) {
    console.log('Welcome to RAL');
    break;
}

// print 10 to 1 in reverse order
let j = 10;
while (j >= -10) {
    console.log(j);
    j--;
}


let l = 1;
while (l <= 10) {
    console.log(l);
    if (l == 5) {
        console.log('bye!');
        break;
    }
    l++;
}

// break is not allowed in if else 
// break is allowed in if else loop only if it's inside the while, for or do-while loops


// 2. for loop
for (let index = 1; index <= 10; index++) {
    console.log(index);
}

let index=1;
for (; index <= 10; index++) {
    console.log(index);
}

let ind=1;
for (; ind <= 10; ) {
    console.log(ind);
    ind++;
}

for (let n = 1; n <= 100; n++) {   
    console.log(n);
    if (n%5 === 0) {
        console.log('hi');
        break;
    }
}

// while vs for
// while loop use cases
// 1.When number of iterations are not fixed : wait for an element
// 2. wait for element on the page
// 3. wait for page loading
// 4. webtable pagination : back 1 2 3 4 ... 7.10 next
// 5. infinite scrolling

// for loop use case
// 1. whne number of iterations are fixed
// 2. month jan to dec : 1 to 12
// 3. day dropdown : 1 to 31
// 4. footer links
// 5. array iterations


console.log('Hello');               // Hello with new line
process.stdout.write('Hello');      // Hello without new line

let numbers = 10;
process.stdout.write(numbers+'');      // only works with string values

// It will go into infinite loop
// second will be always true
for( ; ; ) {
    console.log('abc');
}
