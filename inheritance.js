"use strict";

// Inheritance Using Constructor Functions

// Inheritance:

// Making methods and properties of a class available to its child class

// We will create 2 constructor functions:

// Person Constructor (Serve as parent class)

// Student Constructor (Will be the child of Person)

// We will inherit Student Constructor Class from Person

// Objects created from Student Constructor would be able to access methods and properties from its prototype so Student.prototype

// And Also from Person.prototype

// And the prototype of Student.prototype should be Person.prototype

// So this is how objects created from Student constructor will be able to access methods from Person.prototype

// So thats the core idea that we will implement

// Person Constructor:
const Person = function (birthYear, firstName) {
  this.birthYear = birthYear;
  this.firstName = firstName;
};

// Student will Inherit some properties from Person and will also have some of its own properties and methods

// Student Constructor:

const Student = function (birthYear, firstName, course) {
  // inheriting two properties from Person:
  Person.call(this, birthYear, firstName);
  //Extended Property:
  this.course = course;
};

// inside Student Constructor we did this:

//! Person.call(this, birthYear, firstName);

//? Why did we do this?
// Because doing so:
// this.birthYear = birthYear;
// this.firstName = firstName;
// is just duplicating code
// But if we just do this:
// Person(birthYear,firstName)
// Then this would not work
// Because this is just a regular function where this keyword will be undefined which will result in logic failure and syntax error

// And we cannot call it with new operator because by doing this this function will then return and Object

// So again this is also not we want to return an object inside of our constructor function

// So we did this to get birthYear and firstName properties from Person()

// Person.call(this, birthYear, firstName);

// So doing this is just like:
// this.birthYear=birthYear;
// this.firstName=firstName
// And we used call() to manually set the value of this keyword
// So we this is how we achieved what we wanted

const ali = new Student(2001, "Ali", "Computer Science");

ali;

// ! Now at this point we have managed to inherit properties: birthYear and firstName from Person() and make our code reusable

// But we have one method in Person.prototype:

Person.prototype.calcAge = function () {
  return 2025 - this.birthYear;
};

// And we want to be able to inherit this method on the instances of Student Constructor as well

// So all instances of Student Constructor must be able to access any method or property that is defined in Student.prototype or either from Person.prototype

// So that is only possible if we make:

// Person.prototype, the prototype of Student.prototype

// Means Student.prototype.__proto__ must point to Person.prototype

// doing this will not work
// Student.prototype=Person.prototype

// Because this is just mean the Student.prototype and Person.prototype are just the same objects but they are not

// So instead we do this:

// Linking Prototype:
// by using Object.create()

Student.prototype = Object.create(Person.prototype);

//Object.create will just return an empty object whose prototype is Person.prototype

// So If we want to add any method or property to Student.prototype we must do it after linking the prototype

// because otherwise Object.create would just overwrite everything inside Student.prototype by returning an empty object

// Therefor we need to add methods and properties after linking prototypes

// So lets do this now:

Student.prototype.introduce = function () {
  return `Hi this is ${this.firstName} and I am a student in ${this.course}`;
};

// So we have:
// Inherited properties from Person

// Linked Student.prototype with Person.prototype

// Now any instance of Student Constructor must be able to inherit methods and properties from Student.prototype and Person.prototype as well

// Lets try:

const qais = new Student(2001, "Mohammad Qais", "Computer Science");

console.log(qais.calcAge());

console.log(qais.introduce());

// Absolutely Master Class

// so we were able to access a method from Student.prototype and Person.prototype as well

// But we have another problem still:
console.log(qais.__proto__);

// We know Qais is an object of Student
// But its .__proto__ property is pointing to Person

// So it means javaScript is thinking that Qais is an object of Person

// But its not

// So lets fix it

console.log(Student.prototype.constructor);

// Its pointing back to Person because of Object.create()

// But ideally it should point back to Student

// So lets fix this:
Student.prototype.constructor = Student;
// Thats it

console.dir(Student.prototype.constructor);
// Now it is referencing back to Student

console.log(qais instanceof Student);
console.log(qais instanceof Person);

// So thats how we inherit methods and properties between constructor functions
