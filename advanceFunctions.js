// Advance Functions Concepts

// Pass By Value Vs Pass by reference

// In JS we don't have pass by reference we only have pass pass by value

// Although it work differently with objects, they do behave like pass by reference

// Lets demonstrate this with example

// A Primitive Type

const flight = "LH234";

const jhs = {
  name: "Jahangir Samo",
  passport: 2345678900,
};

const checkIn = function (flightNum, passenger) {
  // its a primitive type and its a copy of the original variable
  (flightNum = "LH999"), (passenger.name = "Mr " + passenger.name);
  // its a reference to the original object so its like
  if (passenger.passport == 2345678900) {
    console.log("You can check In!");
  } else {
    console.log("Wrong passport");
  }
};

checkIn(flight, jhs);
flight;
jhs;
console.log(jhs.name);

// First Class Functions

// JS treats functions as first class citizens

// Means functions are simply values

// Since functions are values we can do:

// 1. Store functions in variables
const add = (a, b) => a + b;
console.log(add(3, 2));

// 2. Store functions as property of object
const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

counter.inc();
console.log(counter.value);

// 3. Pass functions as arguments to other functions

const greet = () => "Hey";

// Example could be:
// button.addEventListener('click',greet);
// but point is just demonstration

// So here we will do

// Calling a function inside function
const sayHello = (name) => {
  return `${greet()} ${name} `;
};

console.log(sayHello("Jon"));

// Functions are objects
// And so functions also have methods

// Higher Order Functions :

// . A Function that receives another function as input / argument

//  . A Function that returns

// Function Methods:

// Call()
// Apply()
// Bind()

// The value of "this" keyword is dynamic it depends on the context where it is being used

// But we can manually set it

// By using call, apply, and bind methods

// Lets demonstrate this with an example

// lufthansa Airlines

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}` });
  },
};
lufthansa.book(239, "Jack Rayban");
lufthansa.book(117, "Zarathustra");

lufthansa;

console.log(lufthansa.bookings);

// So here the this keyword is equal to the object that is calling the method

// But let say lufthansa created a new airline
// Called EuroWings

const euroWings = {
  airline: "EuroWings",
  iataCode: "EW",
  bookings: [],
};

// But lets copy Book() from lufthansa object

// const book = lufthansa.book;
// book()
// but this book function is now a regular function and in a regular function the value of this keyword is undefined (at least in strict mode)
// So its a typo error

// So how can we fix this problem?

// We need to explicitly tell javascript what the this keyword would look like !

// And to explicitly tell javascript : the value of this keyword we have function methods:

// function.call()
// function.apply()
// function.bind()

// Again functions are just a type of objects and objects can have methods

// Call() method :

// The first argument of call() must be the value of this keyword (in this case an object)
// And then usually the rest of the arguments

// So lets call it

// First lets copy book() from lufthansa

const book = lufthansa.book;
// Now book is just a regular function where this keyword is undefined

// Now lets set its value to an object

book.call(euroWings, 23, "Sara");

// Now its the call() that is calling book function with the value of this keyword bound to euroWings

euroWings;
console.log(euroWings.bookings);

book.call(lufthansa, 29, "Jon Jones ");

// here its bound to lufthansa object

//  so here we are manually setting the value of this keyword

// lets add a one more airline

const swiss = {
  airline: "Swiss Airline",
  iataCode: "LX",
  bookings: [],
};

// Now the name of properties must be same like lufthansa in order to work the book()

book.call(swiss, 25, "DB Cooper");

console.log(swiss.bookings);

// Apply()

// similar to call
// does the same job

// the first argument will be the value of this , some object

// the 2nd argument will be an array of all the arguments that a function supposed to get in

const firstData = [583, "Nayla"];
book.apply(swiss, firstData);
swiss;

// but the apply method is not that used anymore

// because we can do the same thing using spread operator with call()

book.call(swiss, ...firstData);
swiss;

// And using call method is preferred

// The Bind Method ()

// Does the same job as call and apply do

// but it returns a new functions where the this keyword is bound to the value that we settled down

// So its set to whatever the value is passed in

lufthansa;
swiss;
euroWings;

// so using bind method we can set the value for one time and then we can use that function for all the next bookings

// book.bind(euroWings)
// it will return a brand new function which we can store in a variable

const bookEW = book.bind(euroWings);
// this is bound to an object for ever in bookEW function

bookEW(17, "Mat damon");
euroWings;

// and e can make a function that is specific for each flight

const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// And we can even set other parameters as well just like default parameter to make more specific functions

const bookEW23 = book.bind(euroWings, 23);

// now we only need to pass in the name of passenger

// what we did here is known as partial application , specifying arguments before hand, and its a common pattern

// ====

// Bind() with event listener

// btn.addEventListener("click", lufthansa.buyPlane);

// here this kw will point to the HTML element where the EVENT handler is attached

// so here we can use bind method to set the value of this manually

// note we can use call or apply method because they do call the function

// but here its the evenListener who will call it

// so we should use a method that returns a brand new function which is done by bind()

// btn.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Immediately Invoked Function Expression (IIFE)

// We create a function and them immediately call it

// this is an anonymous function

// executed only once

// function(){
//   console.log("Never Run Again !");
// } : this is a syntax error

// wrap this in parenthesis

// (function () {
//   console.log("Never Run Again !");
// });
// now its fine
// now immediately call it right after its creation

(function () {
  console.log("Never Run Again !");
})();

// how cool it is

// and we can do the same using arrow function

(() => {
  console.log("Never Run Again");
})();
