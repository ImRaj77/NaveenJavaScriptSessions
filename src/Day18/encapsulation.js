
// Encapsulation

class Employee {

    name                            // public variable
    #age                            // private variable
    #salary;                        // private variable

    constructor(name, age, salary) {
        this.name = name;
        this.#age = age;
        this.#salary = salary;
    }

    // public geteers and setters only for private data variables
    setAge(age){
        this.#age = age;
    }

    // public geteers and setters only for private data variables
    setSalary(salary) {
        this.#salary = salary;
    }

    getAge(){
        return this.#age;
    }

    getSalary(){
        return this.#salary;
    }
}

let emp = new Employee('Tom', 20, 12.33);
console.log(emp.name, emp.age, emp.salary);                     // Tom undefined undefined
console.log(emp.name, emp.getAge(), emp.getSalary());           // Tom 20 12.33
emp.setAge(25);
emp.setSalary(23.44);
console.log(emp.name, emp.getAge(), emp.getSalary());           // Tom 25 23.44


class LoginPage {
    // 
    #username;
    #password;

    constructor(username, password){
        this.#username = username;
        this.#password = password;
    }

    // setters & geteers
    setUsername(username){
        this.#username = username;
    }

    setPassword(password){
        this.#password = password;
    }

    getUsername(){
        return this.#username;
    }

    getPassword(){
        return this.#password;
    }
}

let loginPage = new LoginPage("imraj77", "abcd@1234");
let uname = loginPage.getUsername();
console.log(uname);
let pwd = loginPage.getPassword();
console.log(pwd);

loginPage.setUsername("saag555");
loginPage.setPassword("abhcg@324");
let uname1 = loginPage.getUsername();
console.log(uname1);
let pwd1 = loginPage.getPassword();
console.log(pwd1);



class User {
    name;
    #age;
    #salary

    constructor(name, age, salary){
        this.name = name;
        if(age>=18){
            this.#age = age;
        }
        if(salary>=12){
            this.#salary = salary;
        }
    }

    setAge(age){
        if(age>=18){
            this.#age = age;
        }
    }
}

let usr = new User('Raja', 31, 25);



// Giving access to private data members i.e. Encapsulation
class Browser {
    launchBrowser(){
        console.log('Launching the browser...');
        this.#checkOSCompatible();
        this.#checkRAM();
        this.#checkUpgrade();
        console.log('Browser is launched...');
    }

    #checkOSCompatible(){
        console.log('check checkOSCompatible');
    }
    #checkRAM(){
        console.log('Check RAM size');
    }
    #checkUpgrade(){
        console.log('Check upgrade');
    }
}

// User is trying to access the browser.....
let browser = new Browser();
browser.launchBrowser();
