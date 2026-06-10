
// default funtion import should be outside the {} and just after import not at the end
//import coding, {PI as MyPI, driving, printing as doPrint} from './utils.js';

// console.log(MyPI);
// console.log('----');
// driving();
// console.log(driving);
// console.log('----');
// doPrint();
// console.log(doPrint);
// coding();

// import coding, * as MyUtil from './utils.js'

import userName, * as MyUtil from './utils.js'


// default is not allowed with *
console.log(MyUtil.PI);
console.log(MyUtil.driving);
console.log(MyUtil.printing);
//coding();

console.log(userName);                  // Rajesh