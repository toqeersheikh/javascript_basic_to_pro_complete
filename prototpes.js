"use strict";

// Prototypal Inheritance AKA OOP In JavaScript

//? protoType:

// Every object in javaScript has a prototype, which is basically another object that has in built methods and properties

// means every object is linked to it's prototype object

// And the current object can inherits method and properties from it's prototype

//? And this behavior is usually called protoTypal Inheritance

// So basically Objects inherit methods and properties from their prototypes

// For example each time we use an array method like map we are able to do that because of prototypal inheritance

// Array.prototype.map():

const num = [2, 3, 4];
const squared = num.map((n) => n * n);
squared;

// So Array.prototype is the prototype of all the arrays that we create in JavaScript

// And all the arrays will inherit methods and properties from this Array.prototype object because every array is linked to that prototype object

// And so as our example "num" array

// So again any array that we create can access all the methods and properties that are defined in prototype object

// So this is an intro to Prototypal Inheritance

// ========

//! 3 ways of implementing prototypal inheritance in JavaScript

// To create Objects programmatically we have 3 ways:
// 1. Constructor Function
// 2. ES6 Classes
// 3. Object.create()

// =========

//! 1. Implementing Constructor Functions

// So we can use Objects to create Objects programmatically

// And the constructor Function is just like a regular function

//? But the only difference is that:

//! We call constructor function with the new operator

// ! Convention: Always start constructor function name with the capital letter

//? How to Create a Constructor Function ?

// . We can use function expression
// . We can use function declaration

// both can be used to create a constructor function

// But we cannot use arrow functions because they don't get their own this keyword (this: lexical)

// And we need this keyword to implement constructor functions

// So lets create one:

//! We will create a parameterized function

//! Parameters: Are going to be the properties of the object that we are going to built programmatically

//! And then the values of those properties, will be passed by us when calling the function as arguments

//! So keep in mind the constructor function is going to produce an object

// function:

const Person = function (birthYear, firstName) {
  this.birthYear = birthYear;
  this.firstName = firstName;
};

// So calling this function will produce an object

//! Keep in mind its just going to be possible because of new operator

// if we call it just as a regular function then it won't work

// infect this will be a syntax error

// because in a regular function value of this is undefined

// const jon = Person(1990, "Jon");
// jon;

// So as expected

const jon = new Person(1990, "Jon Doe");
const nile = new Person(1999, "Nile O'Brien");

jon;
nile;

// cool we got two objects

//! The Fancy New Operator 😎:

// So the new operator is very special Operator

// It not only call the function but it does a whole lot more

//? So behind the scenes there happen 4 steps:

// ! Step 1.

// {} A new empty object is created

// ! Step 2.

// Function is called and the this keyword is set to newly created Object (means from now on the "this" will point to newly created object)

// In other words we associated {} to this, so this=>{}

// ! Step 3.

// The newly created object is linked to its prototype object

// .__proto__ : property is created on empty object and its value is set to Person.prototype

// ! Step 4.

// Newly created object is returned automatically

// So its the new operator, that is doing all this stuff behind the scenes

// And this is now a prototype or kind of blueprint to create objects

// But it is not like the traditional OOP Classes like as in C++ or Java

// we can create as many objects as we want using this constructor function

const arya = new Person(2000, "Arya");

arya;

// So its a blueprint for objects but not actually a class

// And we can check this using:

console.log(arya instanceof Person);
console.log(jon instanceof Person);
console.log(nile instanceof Person);

// And properties created in constructor functions are called instance properties

// ========

// ? How to Add Methods in this constructor function?

// And we can add methods just like the way we added properties in the constructor function

// But actually its not the best way to live your life 😅

// I mean avoid this practice

// ! Never Create a method inside of constructor function

// Because doing so will make a copy of the method on each object created by that constructor

// That would be terrible for performance

//! And to solve this problem we are going to use prototypal inheritance

// ==========
// ==========

// Prototypes:

// Each and Every function in JavaScript automatically has property called prototype

// And that include of course constructor functions

// Now every object that we create using a constructor function will get access to all the methods and properties that we define on constructor function's prototype property

// Here is It:

// The prototype property of constructor function

console.log(Person.prototype);
// it is empty object at this time

// Now lets add a method to its prototype property
Person.prototype = {
  calcAge: function () {
    console.log(2025 - this.birthYear);
  },
};

console.log(Person.prototype);

// Now it has the calcAge method

// Now all the objects created using Person Constructor Will get access to Person.prototype

// So they can also use calcAge method
// And we can define properties in person.prototype

// So all the objects created using Person Constructor can use calcAge function which is defined in Person.prototype

// But all the instances of Person constructor means objects created using Person constructor
// Will not carry a copy of calcAge method

// But instead they will simply inherit this function from their prototype object which is of course Person.prototype

jon;
nile;

// jon.calcAge();
// nile.calcAge();

//! So these two cannot use calcAge()

// ? Because we defined calcAge() in Person.prototype later in future after creating these two objects

// ? But now any object that is created using Person Constructor can access and use this method

// So lets practice

const nick = new Person(1997, "Nick");

nick.calcAge();

// now it is fine

// So calcAge is not directly defined on nick but we were still able to access it and use because of prototypal inheritance

//! So this is how we implement prototypal Inheritance  in JavaScript using Constructor function

// we can use:
//! .__proto__ : property to confirm the prototype of objects created by constructor function

console.log(nick.__proto__);
// And indeed we  got the person.prototype

console.log(nick.__proto__ === Person.prototype);
console.log(nick.__proto__ === Person);

// ! ------
// ! ------

// ! So Very Important to note that the prototype of objects created using Person Constructor function  is not Person itself

// ! But its the Person.prototype property which is just another object having calcAge method

// ! And Person.prototype is also not the prototype of Person Constructor
// ! It is just the prototype of objects create by using Person Constructor

// ! And the prototype of Person constructor is something else

// ! ------
// ! ------

// again :

console.log(nick.__proto__ === Person.prototype);

console.log(nick.__proto__ === Person);

console.log(Person.__proto__);

console.log(nick.__proto__ === Person.__proto__);

// isPrototypeOf():
nick;

console.log(Person.prototype.isPrototypeOf(nick));
// Indeed it is true

console.log(Person.prototype.isPrototypeOf(Person));

// Indeed it is false because its not the prototype of Person

// And the prototype of Person is something else

// So Person.prototype is the prototype of all the objects created by using Person constructor

// .__proto__ property comes from  step no 3 of calling constructor function with new operator

// Where .__proto__ property is created in the newly created empty object {}

// And its value is set to Person.prototype

// Ans thats exactly what it means

console.log(nick.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(nick));

console.log(nick);

//! Infect we can see .__proto__ property set to Person.prototype in nick object in the console

//! So this is how JavaScript knows internally that somehow nick object is linked to Person.prototype

// ? How can we set properties on this prototype object means Person.prototype?

Person.prototype.species = "Homo Sapiens";

console.log(nick.species);
// its not an owned property of nick
// so again this object is inheriting methods and properties from its prototype object: So Person.prototype

// we can verify it

console.log(nick.hasOwnProperty("species"));

// so it returns false

console.log(nick.hasOwnProperty("firstName"));

// now it is true because it is owned property of nick

//Now  Person.prototype also has a reference back to Person constructor which is constructor property

console.log(Person.prototype);
//prototype property of constructor function
//console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

// ======

// Prototypal Inheritance on Built In Objects

const arr = [2, 3, 4, 5];

console.log(arr.__proto__);

// Prototype property of Array Constructor

console.log(arr.__proto__ === Array.prototype);

// true : proved

// Now Array.prototype is itself an object so it should have a prototype object as well, so lets look at it

console.log(arr.__proto__.__proto__);

// Object.prototype, Prototype of Array.prototype, It is the top of prototype chain

console.log(arr.__proto__.__proto__ === Object.prototype);

console.log(Array.prototype.__proto__ === Object.prototype);

// Again proved

// And What would be the prototype of Object.prototype :

console.log(Object.prototype.__proto__);

// its null, its where the chain ends
console.log(arr.__proto__.__proto__.__proto__);
// again

// And we can even extend this built in Prototype property: Array.prototype , by adding a new method to it which the language doesn't have yet so we added it manually

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// So here we added a brand new property to the built in Array.prototype property
// Now any array that we created here will get access to this and can use it

const ages = [23, 11, 11, 44, 23, 18];
console.log(ages.unique());

// So we are able to use this method because it is on the prototype of the array "ages"

// But ideally we should never do this

// so extending the prototype of a built in object, its not a good idea
