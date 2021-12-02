console.log('this is tut31');
// ES6 -> CLASSES AND INHERITANCE

/* class -> It is template eg: when we go in any bank they give us the form and we only write our details in front of their name, 
and jbhi class bnate hai usme hota hai constructr, constructor atomatically hota hai when we create OBJECT 

2) still now we are doing this from prototype, prototype inheritance

3) Prototypes are the mechanism by which JavaScript objects inherit features from one another.*/

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;    //LHS Is the object that we are making
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan() {
        return `I am ${this.name} and this company is best`;
    }
    joiningYear() {
        return 2020 - this.experience;
    }
    
    //If we want to pass this without making part of that object constructor
    static add(a, b) {  // means employe me kbhi need pdh skti hai calculation then we use this
        return a + b;
    }
}

// ===============================================================
// INHERITANCE : if we want to inherit the property from the ancestor  use "extends"

class Programmer extends Employee{   //we make the class programmmer and inherit the details from employee , and yeh super defines the class of employee
    constructor(givenName, givenExperience, givenDivision, language, github) {
        super(givenName, givenExperience, givenDivision);  //means this we inherit the details from employee, JB Programmer ka object bna rhe hai tb constructor run hoga constructor tb run hota jb object bnate means programmer ka jb object bnare hai toh yeh super bnakr call krdo
        this.language = language;
        this.github = github;
    }
    favouriteLanguage() {
        if (this.language == "python") {
            return `python`;
        } else {
            return `javascript`;
        }
    }

    static multiply(a, b) {
        return a * b;
    }

}



// let harry = new Employee("arsh", 3, "engineer");
// console.log(harry);
// console.log(Employee.add(5, 5));

rohan = new Programmer("rohan", 3, "lays", "go", "rohan420");   ///this we create a object
console.log(rohan);
console.log(rohan.favouriteLanguage());
console.log(Programmer.multiply(2, 5));







