"use strict";

// Inheritance between ES6 Classes:

// To implement inheritance b/w ES6 classes we need two ingredients

// 1. Extend Keyword:

// To link prototypes behind the scenes
// Inside the the class we still need the constructor function

// 2. Super() Function :

// Its basically the constructor function of the parent class, but the idea is still same

// Instead of doing Person.call() manually, we use Super() to set this keyword and parent class properties

// Parent Class:
class Person {
  //Properties:
  constructor(birthYear, firstName) {
    this.birthYear = birthYear;
    this.firstName = firstName;
  }
  //Methods
  calcAge() {
    return 2025 - this.birthYear;
  }
  greet() {
    console.log(`Greetings from ${this.firstName}`);
  }
}

// Student Class : Child Class

// We Need:
// Extend Keyword.
// Super(): This must be called inside constructor() of child class, and before setting any property in child class, because it sets this keyword

class Student extends Person {
  //Setting properties:
  constructor(birthYear, firstName, course) {
    //Super Function Call:
    super(birthYear, firstName);
    // Extended property:
    this.course = course;
  }
  //Methods:
  introduce() {
    console.log(`Hello my name is ${this.firstName}`);
  }
}

const ali = new Student(2001, "Ali", "CS");

ali;

console.log(ali.calcAge());

ali.greet();
ali.introduce();

console.log(ali instanceof Student);
console.log(ali instanceof Person);

// So again here we can see, Its not the class that is the prototype property of instance
// So the idea of prototypal inheritance is still just the same

console.log(Student.isPrototypeOf(ali));
console.log(Person.isPrototypeOf(ali));

// The prototype property of Both Classes is the prototype of instance
console.log(Student.prototype.isPrototypeOf(ali));
console.log(Person.prototype.isPrototypeOf(ali));

// Now:

// JavaScript Does not have:
// Access specifiers: Public Private and Protected Keywords

// So to implement Encapsulation we use some conventions
// we use # symbol before any property to mark it private for example
// #password
// And same goes for private methods:
// #functionName(){}

// And to access them inside class we still do:
// this.#password

// And if we have a property name , and we want a method with same name
// we can use _ symbol to keep both at same time with no conflict
