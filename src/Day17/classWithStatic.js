
// static in class : 
// you can export the class
export class Employee {

    // static will have a separate memory space which is called CMA - COmmon Memory Allocation
    // static varible will be created in a static memory - CMA
    // static is not related to object and will no bt never part of the object
    static companyName = "Gloabnt"; 

    constructor(name, age, salary, isActive){
        // this.global = local
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }

    coding(){
        console.log('Coding function');
        console.log(this.name,'is coding');
    }

    reading() {
        console.log(this.name,'is reading');
        return 100;
    }

    static billing(){
        console.log('static billing method');
    }
};

let emp = new Employee('Tom', 31, 234567, true);
console.log(emp.name, emp.age, emp.salary, emp.isActive);
console.log(emp.companyName);                               // undefined
console.log(Employee.companyName);                          // Gloabnt
Employee.billing();                                         // static billing method
Employee.companyName = "Google";
console.log(Employee.companyName);                          // Google

// let emp1 = new Employee('Peter', 71, 234567, fasle);
// let emp2 = new Employee('Ravi', 51, 234567, true);