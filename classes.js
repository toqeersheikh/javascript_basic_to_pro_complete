"use strict";

// Classes in JavaScript are just a layer of abstraction over constructor functions

// They still implement constructor functions behind the scenes

// And still the idea of prototypal inheritance is just as it is

// Lets implement the previous example using ES6 Classes

//! As classes are just a special type of functions, so we can write it either in form of function expressions or function declarations

// But we cannot use arrow functions to implement classes

//! class {};
//! const Person = class {};

// ! And inside the class the first thing that we need to do is to create a constructor

// And this constructor function actually works in a pretty similar way like the previous constructor that we learnt

// Lets create a class:

class Person {
  constructor(birthYear, firstName) {
    this.birthYear = birthYear;
    this.firstName = firstName;
  }
  // this is actually a method of this class that needs to be called as a constructor means with a new operator just like the usual constructor
  calcAge() {
    console.log(2025 - this.birthYear);
  }
}

// And to create an object from this class we still need the new operator

// And so whenever we create a new object, this constructor will automatically be called

// lets create an object:

const nick = new Person(2000, "Nick");

console.log(nick);

// So everything looks exactly the same just like before

// So the same 4 steps happens behind the scenes because of new operator as with usual constructor

// And when we call the class with new operator the constructor function will immediately be invoked

// And return a new object

// Adding methods to class:

// And the classes don't have any prototype property

// All the methods that we create in the class, outside the constructor function will be on the prototype of objects created using class

const jon = new Person(2001, "jon");
jon;
jon.calcAge();

// so with the class syntax we don't have to manually mess with the prototype property mess with the prototype property like as we did in the constructor function

// Adding a method manually to the prototype property of the class

Person.prototype.greet = function () {
  console.log(`Hey this is a ${this.firstName}`);
};

jon.greet();

// doing this would not work

// Person.greet=function(){
//     console.log(`Hey this is a ${this.firstName})
// }

// Classes are not hoisted means we cannot use them before declaring them

// =============
// =============

//! Getters and Setters:

// Getters and Setters are simply functions to get and set values

// And we use GET and SET keywords to implement them

// But from outside they still look like a regular properties

//! Getters and Setters are also known as Accessor Properties

//! Normal Properties are called Data Properties

// So let we want to add a method to get the latest movement

const account = {
  owner: "Jon",
  movements: [200, 530, 120, 130],
  get latest() {
    return this.movements.pop();
  }, // used "get" keyword
  set latest(mov) {
    this.movements.push(mov);
  }, // used "set" keyword
};

account;

// even though getters and setter are function but we don't call them like functions we just read them as we do with properties

// here it is:
console.log(account.latest);

// setting value using setters:

account.latest = 159;

console.log(account.latest);

//now the latest movement is 159 which we have settled using setter property

// So this can be very useful when we want to read something as a property but still needs to do some computation before reading it

// ! But getters and setters are independent of each other

// so just a setter or getter alone would work

// ! And classes do also have getters and setters

// And they do work in the exact same way

class Jon {
  constructor(birthYear, firstName) {
    this.birthYear = birthYear;
    this.firstName = firstName;
  }
  //methods:
  calcAge() {
    return 2025 - this.birthYear;
  }
  greet() {
    return `Greeting from ${this.firstName}`;
  }
  //getter
  get age() {
    return 2025 - this.birthYear;
  }
  //getter and setter do belongs to the prototype

  //static method
  static hi() {
    return "Hi bro";
  }
  // a method that only belongs to class / attached to constructor
  //it does not belong to prototype
  // therefor all the array instance do not inherit it
}

//! we directly call static method on class

//using static method
const staticResponse = Jon.hi();
staticResponse;
//we cannot call it upon instances

const jonJones = new Jon(1994, "Jon Jones");

//calling a getter method
console.log(jonJones.age);

// jonJones.hi(): type error because we are trying to access a static method on an instance of class

// =============
// =============

// ! Object.create()

// 3rd way to implement prototypal inheritance in JavaScript

// Accepts an argument: An Object

// Different from Constructor Functions and Classes

// But the idea is still same: Prototypal Inheritance

// ? However there are:
// ! No prototypes involved
// ! No Constructor functions
// ! No new operator

// So instead we use Object.create to manually set the prototype of any object

// ! The object that is passed into Object.create() will be the prototype of all the objects that we will create

// const protoTypeObject={}

// ! So we create a protoType Object

// ! And then pass it to Object.create()

// Object.create(prototypeObject)

// ! And that returns a new object with the prototype set to the object that is passed in

// newObject = Object.create(prototypeObject)

// So lets create that

//an object that will serve as prototype Object
const PersonProto = {
  calcAge() {
    return 2025 - this.birthYear;
  },
};

//lets use object.create():

const noah = Object.create(PersonProto);

//it will return an empty object with the prototype object set to PersonProto

// And since it is an empty object we have to add it new properties that we want the object to have

noah.birthYear = 2001;
noah.firstName = "Noah";

noah;
console.log(noah.calcAge());

// now it is inheriting methods and properties from its prototype

// So we implemented prototypal inheritance in a completely different way

// this is how we manually set the prototype of any object to an object

console.log(noah.__proto__);
// indeed here it is person proto object

console.log(noah.__proto__ === PersonProto);

//Now two objects are effectively linked through the proto property just like before

// And looking up methods and properties in the prototype chain works exactly like before

console.log(PersonProto.__proto__ === Object.prototype);

// Still Object.prototype is at the top of prototype chain

// =============
// =============
// =============
