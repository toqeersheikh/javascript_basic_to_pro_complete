"use strict";

// Variables Declaration
// use let and const
// JS is dynamically typed language

// ===== Using Var ====
/*
// Avoid Var kw
console.log(age);
// variables declared with var are hoisted (can be accessed before initialization)
var age = 18;
console.log(age);

*/

// ===== Using Let ====

/*
// console.log(age);
// not hoisted we cannot access it will throw an error
let age = 18;
// can be re-assigned
age = 22;
console.log(age);
*/

// ===== Using Const ====
const birthYear = 2001;
// cannot re-assign values to variables declared with const
console.log(birthYear);

// Undefined:
// Absence of value or empty value, may assigned in future
// and for such case use let kw

// Null:
// Empty value, intentionally  kept empty unlike undefined

// Template literal

const userName = "Wick";
const currentStatus = "hunter";

const jhonWick = `He is Jhon ${userName} and he is a ${currentStatus}`;
console.log(jhonWick);

// Type Conversion and Coercion

// Conversion
// Converting one data type into another explicitly
console.log(String(birthYear));
console.log(Number(birthYear));
const tutor = "Jonas";
console.log(Number(tutor));
console.log(Boolean(tutor));

// operations

console.log(birthYear + 18);
console.log(tutor + 18);

console.log("90" + 10);
console.log("90" - 10);
console.log("90" / 10);
console.log("90" * 2);

// === Truthy and Falsy Values: ===

// Falsy Values:
// Zero 0
// empty string ''
// NaN
// Null
// Undefined

// And of-course  the boolean type False is also false

// So these are not exactly false but will become false when converted to boolean

// All of these values will be converted to false when we try to attempt to convert them into boolean like in the if condition or anywhere where they are converted to boolean explicitly or implicitly

// lets try

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(false));

// All results are false

// Everything else will be truthy value

// Truthy values will return true when converted to boolean

console.log(Boolean(1));
console.log(Boolean("jon"));
console.log(Boolean({}));

// All are true

// Ternary Operator
// Contains:
// condition ?
// if part (executed when condition is true)
// else part (executed if condition is false)

const age = 24;

const admission =
  age <= 24 ? "You are eligible for Bachelors" : "You are over age";

console.log(admission);

console.log(`${admission} for University `);

// Functions
// Starts with:
// Function Keyword
// Function Name
// Parenthesis ()
// Function Body. {}

function logger() {
  console.log("Jon Jones is GOAT");
}

logger();

// Ways to create a function
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function

// Function Declaration
function calcAge(birthYear) {
  return 2025 - birthYear;
}

// Function Expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

// Arrow Function
const calcAge3 = (birthYear) => 2025 - birthYear;

// Calling the Function
console.log(calcAge(2001));
console.log(calcAge2(2001));
console.log(calcAge3(2001));

// Functions calling other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// =============
// =============
// =============

// Arrays

// Ways to create an array
// using []
// using array constructor new Array()

const friends = ["nayyar", "Jahangir", "Arya"];

console.log(friends);
console.log(friends[0]);
console.log(friends.length);
console.log(friends.length - 1);
console.log(friends[friends.length - 1]);

friends[0] = "Nick";

console.log(friends);

// ============

// Primitive Data types Vs Non Primitive Data types

// ============

// Primitive Data Types:

// There are 7 primitive data types in Js:

// Number
// String
// Boolean
// Undefined
// Null
// Symbol
// BigInt

// Primitive data types are stored by value not by reference (memory address)

// Means variables hold the value directly

// Immutable : Cannot be changed or modified directly

// Value itself cannot be changed it can only be replaced

// When you change them a new value is created in the memory and the old value is gone

// ============

// Non Primitive Data Types

// Stored by reference

// Variables don't hold  the actual value

// They hold a reference (a memory address) that points where that value is stored in memory

// Mutable means we can modify them directly

// Arrays
// Objects
// Functions

// ============

// ! Note:

// ! JavaScript is dynamically typed language means we don't need to manually define data types of variables or values , its the JS that will handle this for us

// ! So as JS is dynamically typed
// ! In JS its not the variable that has type its the value that has a defined data type or its undefined

// ! Variables declared with let are mutable

// ! Variables declared with Const are immutable

// ! Primitive data type values are immutable ( cannot modify them or they are lost)

// ! Non-Primitive data types are mutable (can be modified [its value : properties / elements])

// ! For non-primitive variables declared with const, the binding (reference) is immutable,

// ! but the content (value) is still mutable and can be modified.

// ! Const variables are immutable

// So bottom line is we can mutate arrays  but we cannot replace an entire array

// And an array can hold multiple data type values at the same time

const me = ["TS", 24, ["mohid", "zaine", "sufyan"]];
console.log(me);
// its a  valid array

// =========

// javascript Array methods

const lang = ["C"];
lang;

lang.push("C++");
lang;
lang.unshift("Python");
lang;
lang.pop();
lang;
lang.push("C++");
lang;
lang.shift();
lang;
lang.push("Python");
lang.push("JavaScript");
lang.push("Ruby");
lang.push("Ruby on Rails");
lang.push("Go Lang");
lang;
console.log(lang.indexOf("Python"));
console.log(lang.includes("Go Lang"));

// Objects:

const person = {
  firstName: "Jon",
  lastName: "Jones",
  birthYear: 1970,
  job: "MMA Fighter",
  calcAge: function () {
    return 2025 - this.birthYear;
  },
};

person;
console.log(person.firstName + " " + person.lastName);

// Bracket Notation
console.log(person["job"]);
const nameKey = "Name";
console.log(person["first" + nameKey]);
console.log(person["last" + nameKey]);
// So first it will compute the property and then execute it

// Adding property

person.location = "USA";
console.log(person.location);

person;
const personAge = person.calcAge();
personAge;

// Iteration:

// The For Loop:
friends;
me;

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

const type = [];

for (let i = 0; i < me.length; i++) {
  type.push(typeof me[i]);
}
console.log(type);
console.log(typeof person);
console.log(typeof friends);
console.log(typeof me);
console.log(typeof type);

// Another way

const yearsArr = [1999, 2003, 2007];
const ages = [];
for (let i = 0; i < yearsArr.length; i++) {
  ages[i] = 2025 - yearsArr[i];
}

ages;

// Continue and Break Statement

// Continue: Exit the current iteration and move to the next iteration

const newArr = [12, "13", "14", 15];

for (let i = 0; i < newArr.length; i++) {
  if (typeof newArr[i] === "string") continue;
  console.log(newArr[i]);
}

// Break: Completely terminate the whole loop

for (let i = 0; i < newArr.length; i++) {
  if (typeof newArr[i] === "string") break;
  // so where ever this condition is satisfied break the loop, exit it
  console.log(newArr[i]);
}

// Looping backwards:

for (let i = newArr.length - 1; i >= 0; i--) {
  console.log(newArr[i]);
}

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let i = 0; i < nestedArray.length; i++) {
  for (let j = 0; j < nestedArray[i].length; j++) {
    console.log(nestedArray[i][j]);
  }
}
