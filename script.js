// complete this js code
function Person(name, age) {
   constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
	  greet() {
	  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
};

// function Employee(name, age, jobTitle) {
//   Person.call(this, name, age);
//   this.jobTitle = jobTitle;
// }

class Employee extends Person {
  constructor(name, age, jobTitle) {
    // Call super constructor to inherit name and age properties
    super(name, age);
    this.jobTitle = jobTitle;
  }

  // Method to greet with job title
  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
