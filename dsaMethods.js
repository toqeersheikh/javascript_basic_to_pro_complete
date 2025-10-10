// "use strict";

// Destructuring Arrays

// Breaking / Unpacking Array or Objects into separate Variables or Properties

// Syntax:

// const [variableName]= arrayName

// destructuring assignment: [] on the left side of assignment operator

// ! while destructuring always declare variable with const its best practice but not an absolute

//  does not impact the original array

const arr = [11, 22, 33];

const [x, y, z] = arr;
// destructuring an array, retrieving elements of an array out in separate variables

arr;
x;
y;
z;

const restaurant = {
  name: "Savor Foods",
  location: "Blue Area Islamabad",
  categories: ["rice", "fried chicken", "roasted chicken", "chinese"],
  starterMenu: ["salad", "chicken piece", "mushroom"],
  mainMenu: ["chicken rice", "beef rice", "sindhi rice"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// So it has a couple of arrays that we can destructure

let [firstCategory, secondCategory] = restaurant.categories;
firstCategory;
secondCategory;

// Now we can use destructuring to swap elements
// without destructuring we would have to make a new variable (temporary variable method)

// lets swap first category with second

// ! to swap variables with destructuring you have to use let its not possible with const

[secondCategory, firstCategory] = [firstCategory, secondCategory];

firstCategory;
secondCategory;

// They are swapped

// ! A nice trick: We can return an array from a function and then immediately destruct that into separate variables, this is how we can return multiple values from a function in a single time

// so lets call order function from our restaurant object

// restaurant.order(0, 2);
// this will return an array and now we can immediately destruct it
const [starter, main] = restaurant.order(0, 2);
starter;
main;

// How cool it is

// Lets take it to next level

// what if we want to destructure a nested array

const nestedArr = [3, 4, [5]];

// so for this use nested destructure assignment

const [i, j, k] = nestedArr;
i;
j;
k;

// now to take each of them out use nested destructure assignment

const [r, s, [t]] = nestedArr;
r;
s;
t;

// more deeper

const deepNest = [99, 88, [77, 90, [33]]];

const [a, b, [c, d, [e]]] = deepNest;

a;
b;
c;
d;
e;
// this is super cool

// and if we don't know the length of array we can predefine the values of variable while destructuring ;

const num = [3, 4];

const [p, q, h] = num;
p;
q;
h;

// here we assumed we don't know length and therefor for h we got undefined

// so for such case we can play safe

const [u = 1, v = 1, w = 1] = num;

u;
v;
w;

// cool

// =========

// Destructuring Objects

// To destructure Object we use {}
// because thats how we create objects
// Then we have to provide a variable name that exactly matches the property name that we want to retrieve from object

restaurant;

// adding opening hours property

restaurant.openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  Sat: {
    open: 24,
    close: 0,
  },
};

// note: in objects the order of elements do not matter

// So we don't need to manually skip any element like we did in array

// lets destructure an object:
restaurant;

// const { name, openingHours, categories } = restaurant;
// name;
// openingHours;
// categories;

// keep in mind the name or variables while destructuring the object must be same as they are in the object

// Now what if we want to have the name of variables different than the properties of object while destructuring the object

// We can do that as well

// But of course we still need to reference the property names like we did before otherwise javaScript would have no way of knowing we actually want

// Syntax to change variable name while destructuring will be:

// const {name:newName}=objectName;

const { name: restName, openingHours: hours, categories: tags } = restaurant;

restName;
hours;
tags;

// so this how we are able to give them new names

// ===============

// What if we are trying to read a property that does not exists?

// for example while dealing with data that is coming from an API

// usually in this case we will get undefined

// but for such cases we can set default values

//  for example let say we are trying to read a property called "menu" from restaurant object that don't exist

// const { menu } = restaurant;
// menu; undefined
// so we can set a default value

// And the syntax to set a default value will be:
// so we use assignment operator and then an array to assign a value

// const {menu=[defaultValue],starterMenu:starters=[]}=restaurant;

const { menu = [] } = restaurant;
menu;

// ===============

// Mutating Variables while destructuring Objects

// we did that with arrays

// but with objects it works a bit differently

let m = 111;
let n = 999;

const obj = {
  m: 23,
  n: 22,
  o: 80,
};

// don't use let or const while destructuring because we use them to create new variables
// but we want to mutate them

// now you may expect this syntax but this is wrong :
// {m,n}=obj;

// and in order to make it work we need to wrap it into parenthesis ()

m;
n;
({ m, n } = obj);

m;
n;

// cool they are swapped

// ===============

// nested object destructuring

// so to learn that lets extract open and close as separate properties from openingHours nested in restaurant object and inside openingHours there are still nested objects with the name of days : fri, sat, sun etc

// so the point is we have deep nested objects and we need to deep destructure them in order to retrieve open and close out of object

// Syntax:

// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// const { openingHours } = restaurant;
// openingHours;

// but we want open and close out

// const { fri } = restaurant.openingHours;
// fri;

// and we can take it further more

// we can assign new names to open and close while destructuring

// const {fri:{open:op,close:cl}}=restaurant.openingHours;

restaurant;

const {
  fri: { open: op, close: cl },
} = restaurant.openingHours;

// lets try to understand more

// const {
//   openingHours: { fri  },
// } = restaurant;

op;
cl;

// Cool

// ==========

// The Spread Operator (. . .)

// we can use spread operator to expand an array into all it's elements

// so basically unpacking all array elements at once
arr;
num;
const newArr = [...arr, ...num];
newArr;

// ! it not only works on arrays but on all iterables (arrays, strings, maps,sets)
// ! we cannot use spread operator in template literals

const str = "Jonas";
// it will return an array of with each letter separated
console.log(...str);

// used to create shallow copies of arrays
// used to merge two arrays
// used to pass arguments in a function that accepts multiple inputs
// we can also make shallow copies of objects

// ! From ES 2018 it works on objects as well even though objects are not iterables

const newRestaurant = { ...restaurant, founder: "Jon Jones" };
newRestaurant;

const res = newRestaurant.order(0, 1);
res;
// Everything worked fine

// ==========

// Rest pattern and parameters (...)

// Looks exactly like spread operator
// Same syntax
// But it does opposite of spread operator

// It takes multiple elements and condense them into one array
// So rest pack array elements into one array

// spread syntax:
// const arr=[...num]
// ! because its on the right side of assignment operator

// ! Rest pattern is on the left side of assignment operator

const [g1, g2, ...others] = [11, 12, 23, 44, 56];
g1;
g2;
others;
// The rest pattern basically collects the elements that are unused in the destructuring assignment

// (...) on both sides of assignment
// [...]=[...];
const [chicken, beef, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
chicken;
beef;
otherFoods;

//! rest element must be the last element in the destructuring assignment

// syntax to skip any element in destructuring
// rest do not collect any skipped element
// const [first,,second,...rest]=arrayName; just leave a space to skip

// rest pattern also work with objects

const { Sat, ...weekDays } = restaurant.openingHours;
Sat;
weekDays;

// cool

// We can use rest pattern in order to pass multiple arguments in a function all at same time

// ! We can use rest pattern where-ever we need variables written with comma separated
// ! we use spread operator where we write values separated by comma

// lets create a function that accepts an arbitrary  amount of argument without mentioning the limit
// and then add all of them
// for example
// add(2,3)
// add(2,3,4,5,)
// add(2,3,4,5,4,5,6,67,77)
// it should accept any number of arguments
// we can use rest pattern
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const add1 = add(2, 3);
const add2 = add(2, 3, 10, 11, 13, 55);
const add3 = add(100, 13, 150, 666);
add1;
add2;
add3;

// how cool it is wow
// ==========

// Short Circuiting (&& and ||)

// AND and OR operators can do a lot more then just combining boolean values

// ==========

// Short Circuiting with OR operator

// The result of OR operator doesn't always have to be a boolean

// There are 3 more properties of OR operator that we don't know Yet
// 1. They can use any datatype
// 2. They can return any datatype
// 3. They do something called short-circuiting or also known as short circuit evaluation

// Short Circuiting:

// In case of OR Operator short circuiting means that where-ever OR operator finds a truthy value it will immediately return it, means the first truthy value among all will be returned and the evaluation will be stopped there.

// ! so the point is OR operator is hunting for a TRUTHY value here and where ever it finds it the evaluation stops immediately and that truthy value is returned
// Or Simply it return the last value if all of them are falsy
console.log(3 || "Qais");
// if the first operand is truthy then second operand will not even be evaluated
console.log("" || "Qais");
console.log(true || 0);
console.log(undefined || NaN || null); //last value because all are falsy values
console.log(undefined || 0 || "" || "Qais" || null); //because qais is 1st truthy value
// And if we think about it, it actually make sense
// Because in OR operation:
// ! The result is true if at least one operand is true
// So where-ever OR operator finds a truthy value the overall result of expression will be true
// thats why the evaluation stops

// Practical Use:
// We can use OR operator short circuiting concept to set default values

// let say if there is a guest property in restaurant object and if has some value
// and if it is not then set some value to it

// using ternary operator:
// const guests = restaurant.guests ? "We already have guests" : 10;

// setting default value using OR operator
const guests = restaurant.guests || 20;
guests;
// because restaurant.guests. gives undefined which is a falsy value so it is ignored by OR operator and then comes 20 which is truthy value so it returns 20 which is then captured in guests variable
// So that is how we can set default values

// but what if:
// restaurant.guests=0;
// and 0 is valid number of guest but here of-course the or operator will not consider it, it will ignore it because 0 sa falsy value
// So thats a problem with Or operator short circuiting

// We will explore a great solution to this problem in future

// ==========

// Short Circuiting with AND operator

// Means the AND operator will return the first falsy value and the evaluation will be stopped there
// And it return the last value if all of them are truthy

// ! so the point is AND operator is hunting for a falsy value here and where ever it finds it the evaluation stops immediately and that falsy value is returned

console.log(0 && "Qais");
// because 0 is the first falsy value

console.log(7 && "Nuri" && "Qais");
// because its the last truthy value as all are truthy values

// And once again it makes sense because:
// ! AND operation is only true if all the operands are true
// And if it finds a falsy value during evaluation then it must stops because the overall result of the expression is going to be false anyway

// So that is why it works this way
console.log("Hello" && 8 && null && "Qais");

// Practical UsE:
// We can use the AND operator short circuiting concept to execute code in the second operand if the first one is true

let isLoggedIn = true;
let userName = "Qais";

// Using && to run code only if isLoggedIn is true
const welcome = isLoggedIn && `Welcome ${userName} !`;
welcome;

function greet() {
  return "Hello from greet function!";
}

let shouldGreet = true;

const isGreeted = shouldGreet && greet(); // greet() only runs if shouldGreet is true
isGreeted;
// ==========

// The Nullish Coalescing Operator (??)

// So we used OR operator to set a default value in case that the first value was a falsy value

// just like this:
// const guests=restaurant.guests || 10;
// but this logic won't work with zero but zero is a valid number of guest

// So we have nullish coalescing operator a solution to this problem

// It was introduced in ES 2020

// Works almost the same way as OR operator
// console.log(restaurant.guests); it is undefined at this point
// so lets set it to zero

restaurant.guests = 0;
// now its zero
// if used OR operator

const guestOr = restaurant.guests || 10;
guestOr;
// here 10 is returned because 0 is falsy value and OR operator ignores it thats why it returns 10

// But 0 is a valid number of guests so lets use nullish coalescing operator
const guestCorrect = restaurant.guests ?? 20;
guestCorrect;
// only if the first operand was null or undefined only then the second operand would be returned or executed
// now it is returning 0 , so its a real number of guests

// why does it works?
// ! Because the Nullish Coalescing operator works with the idea or with the concept of nullish values instead of falsy values
// ! And nullish values are:
// ! Null
// ! undefined
// ! It does not include zero or empty string

// So basically it is as if for nullish coalescing operator that the zero and empty string are not falsy values and were truthy values I mean it just behave like this.

// ! So with this operator all the nullish values  (null , undefined) will short-circuit the evaluation here

// ==========

// Looping Arrays

const bigMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// ==========

// For Of Loop

// With For Of LOOP we don't need
// To setup a counter
// A condition
// And update the condition

// we can still use continue and break statements

// it loops over the array and give each element in each iteration

// Syntax
// for(const variable of arrayName){}
for (const item of bigMenu) {
  console.log(item);
}
// So it will log each element of array

// So in each iteration it gives us access to current array element

// what if we also want the current index and not just the current element

// in the for of loop its a bit painful

// we will use entires() method on this array

for (const item of bigMenu.entries()) {
  // console.log(item); return an array of each element with its index
  const [i, e] = item;
  // destructuring each array to retrieve its index number and element
  console.log(i);
  console.log(e);
}

// entries() returns:
// an array with each element with its index number in each iteration
console.log(bigMenu.entries());
// Iterator {}

// But if we want to take a look at it we need to expand it using spread operator and create a new array out of it

console.log(...bigMenu.entries());
// again its a big array with array of each element with its index in it

// ==========

// Enhanced Object Literals

// From ES 6 we have some upgraded method to create properties inside object
// let say you already have an object in. global scope and you just want to create it a property of object
// then you don't need to write
// for example we have openingHours in global scope
// const restaurant={
//   openingHours:openingHours; its valid but its annoying
// }
// so the enhance way is:

// const restaurant={
//   openingHours, just it is
// }

// but of course we can write any other variable name

// ==========

// second enhancement is about writing methods

// From ES6:

// We no longer have to create a property and then set it to a function expression like we have been doing it so far , we can write it in easier way

// we don't need function keyword
// and even the semicolon

// just like this

// const restaurant = {
//   order(starterIndex, mainIndex) {
//     return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
//   },
// };
// Cool
// So this works exactly the same as before but with a slightly easier syntax

// ==========

// 3rd enhancement is we can is that we actually compute the property names instead of having to write them manually and literally

// Compute means calculation/evaluation/process the expression in terms of computer

// ==========

// Optional Chaining "?."

// ES 2020 Feature:

// With Optional Chaining if a certain property does not exists then undefined is returned immediately to avoid errors

// Instead of just the dot operator we use ? dot and then open

// now technically this is an error
// because mon is undefined and we are trying undefined.open
// which is not possible so:
// const isMon=restaurant.openingHours.mon.open;
// We can use optional chaining operator
const isMon = restaurant.openingHours.mon?.open;
isMon;
// Now it returns undefined instead of an error that is hard to track and fix

// ! So the property that is before ? exists then the next property will be read
// ! and if it does not exists then immediately undefined will be returned and the expression will not be evaluated further

// And what does it mean if it exists?

// So a property exists if its not NULL and Not undefined (the nullish value concept) not the falsy value concept
// So if its zero or empty string then it still considered fine

// And of-course
// We can have multiple optional chaining operators at same time

// So

console.log(restaurant.openingHours?.mon?.open);
// And notice "?" is just before the dot operator of any property
// And what does this means if openingHours property does not exists then the monday property will not even be read and so therefor we don't get that error

// So this is very useful to prevent any un expected bug

// ==========

// Looping Objects

// Objects can be looped because JavaScript doesn’t try to treat them as iterables — instead, it provides object-specific tools (for...in, Object.keys/values/entries) that convert their properties into something loop-able (like arrays).

// for in loop

for (const key in restaurant.openingHours) {
  console.log(key);
  console.log(restaurant.openingHours[key]);
}
// old loop

// for...in is special syntax created in JavaScript just for objects.

// It doesn’t use the iterable protocol.

// Instead, it uses object’s internal property list:

// Collects all enumerable property names (keys).

// Iterates through them one by one.

// We used for of loop for an array which is an iterable

// But we can also loop on objects which are not iterable  but in a indirect way

// We have different options about exactly we want to loop over

// So do we want to loop over:

// . object property names aka keys
// . over the values
// . or both together

// Lets start by looping over property names
// and they are called keys

// object keys:

// we will use for of loop
// and we are not actually looping over the object itself

// Instead we are going to loop over an array

// SO let see:

// Object.keys()
// Accept an object as input argument
// return an array of keys (property names)
// [key,key,key]

const properties = Object.keys(restaurant.openingHours);
properties;

// And using this method we can also calculate length of properties that some object hold

console.log(`We are open  ${properties.length} days :)`);

// now we have an array of keys and now we can loop over it
let openStr = `We are open  ${properties.length} days :`;

for (const day of properties) {
  console.log(day);
  openStr += `${day} `;
}
openStr;

// hours;
// And we can do it directly

for (const day of Object.keys(hours)) {
  console.log(day);
}
// Cool, so thats looping over property names

// =============

// let see if we want values

// Object.values()
// pass an object as an argument
// return an array with values of an object
// [value,value,value]

const values = Object.values(restaurant.openingHours);
values;
// we got an array of objects and now we can loop over it

// =============

// Object.entries()
// pass an object as input
// return an array with property and value within an array of each data member from object
// so [[key:value],[key:value],[key:value]] like this :
// so name+values together

const entries = Object.entries(restaurant.openingHours);
entries;

for (const x of entries) {
  console.log(x);
  // 3 arrays with names+values
}

// so lets use destructuring to create something meaningful out of it

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we are open at ${open} and close at ${close}`);
}

// in arrays entries method return an array with index and value for each element

// ==========
// ==========
// ==========

// ==========

// Sets:

// Introduced in ES 6

// Sets are collection of unique values

// No duplicate values allowed

//Values can be of any type

// Sets can hold mixed data types as well

// Order is insertion based (Elements keep order in which they were added)

// Creating a Set:

// ! To create a set we can use Set Constructor: new Set()

// General Syntax:
// const setName = new Set(iterable);

// Creating an empty set:
const mySet = new Set();
mySet;

// if nothing is passed it creates empty set

// We can pass an array or any iterable to set Constructor

const numbers = new Set([1, 2, 3, 4, 4, 5]);
console.log(numbers); //his is just Quokka’s visualization style.

// In theory, a Set is unordered and doesn’t have indexes. It only stores unique values.
// So its just Quokka Js visualization No actually sets have indexes

// duplicate values will automatically removed

// Basic Set methods:

const set = new Set();
set;
// add(): to add elements into set
set.add(10);
set.add(20);
set.add(20);
set.add(30);
set.add(40);

set;
// duplicates are ignored

// checking existence

// has(): check if a value exists in set and return a boolean value
console.log(set.has(10));
console.log(set.has(30));
console.log(set.has(50));

// deleting a value:
// Delete(): delete the passed value if exists
set.add(50);
set.add(90);
set;

set.delete(50);
set.delete(90);
set;

// size of set:

console.log(set.size);

// Clear All values:

set.clear();
set;

// Can we retrieve a value from a Set directly?

// ❌ No, not directly by index or key.
// As Sets have no index and no key

// Convert to Array and then access: If you really want to get a value by index:
numbers;

// using spread operator, as spread operator work on all iterables
const arrFromSet = [...numbers];
arrFromSet;
// Now we can retrieve any value using index as arrays are index based

// Iterate to “retrieve” values: If you want to access values, you have to loop:

// Iterating Sets

//! Since Sets are iterables, Means Sets follow the iterable protocol (they implement [Symbol.iterator]), you can use all the iterable-based features in JS:

// 1. for...of loop
// 2. Spread operator
// 3. Destructuring

// So lets start:

// for of Loop ;
numbers;

for (n of numbers) {
  console.log(n);
}

// Spread Operator:

numbers;

const setArr = [...numbers];
setArr;

// Destructuring:

numbers;

const [n1, n2, n3] = numbers;
n1;
n2;
n3;

// ✨ The reason this works is because for...of, spread, and destructuring all rely on the iterable protocol, and since Set provides [Symbol.iterator], it qualifies as iterable.

// ==========

// Difference of sets from arrays

// There are no key value pairs
// There are no indexes
// The order of elements does not matter
// Sets are also iterables
// They can be empty
// They are not meant to replace arrays
// They are often used to remove duplicates from arrays
// They have have properties of being unique and straight forward
// If the order does not matter and you don't want to perform too much data manipulation then use sets otherwise arrays are best

// ==========

// Maps:

// Map is a key value pair data structure just like objects

// {key:Value}

// But in objects key are only type of strings

// And in Maps keys can have any type, thats big difference

// It could even be objects, arrays, or other maps

// To create a map we use a map constructor

const rest = new Map();
// created an empty map
rest;

// And the easiest way to create a map is to create an empty map and then fill it

// And To fill up map we use Set() method

// Arguments of Set():

// 1. Key (any type)
// 2. Value

// It allows us to add a new data into the data structure

rest.set("name", "Savor Foods");
// And Let say the restaurant has two locations: so we can create a key with number

rest.set(1, "Islamabad, Punjab");
rest.set(2, "Lahore,Punjab");

rest;

//! calling the set method return a new map

// Now the fact that set() return a new map allows us to chain the set method like this:

// rest.set().set().set().set().set()

// So calling a set() return a new map, since set() is a map method so we can call it again in a chain to add multiple values to the map

// Now as we know in maps keys can be of any type

// So lets add boolean values as keys and make method calls in a chain

rest
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");
// And this can be really useful

// And in order to read from map we use the get method

// And the get() is available on all maps

// All we need to read some data from we need to pass in the name of key in the get()

// Map.get("Name_of_Key")

console.log(rest.get("name"));
console.log(rest.get(true));

// And here when we get the elements out from map using get(), the data type of key does matter
// It must be of same type as it is in map

// For example:
console.log(rest.get(1));
console.log(rest.get("1")); // here we got undefined because the is no key 1 with type of string

// Lets create something interesting with boolean keys from map

// So let say the current time is:

rest;

const time = 21;
// so:
const isOpen = rest.get(time > rest.get("open") && time < rest.get("close"));

// time > rest.get("open") : the result of this expression will be boolean : true or false
// time < rest.get("close") : the result of this expression will be boolean : true or false

// boolean && boolean = boolean
// and rest.get(boolean):
// for example:
// rest.get(true && true) or rest.get(true && false)
// rest.get(true)
// rest.get(false)

// So this is how this expression will be computed and at the end we are doing:
// rest.get(true) or rest.get(false)
// because we have booleans : true , false : as key names so we can pass them into get()

isOpen;

// So thats really clever
// so it is just:

console.log(rest.get(true));
console.log(rest.get(false));

// Its really clever but it's not so readable
// ! So don't over use this kind of pattern

// has(key):
// check if a map contains a certain key:

const hasOpen = rest.has("open");
hasOpen;

// delete(key)
// delete elements from map based on key
rest;

rest.delete(2);
console.log(rest.has(2));

// size property:

console.log(rest.size);

rest;

// Clear():
// to remove all the elements from map

rest.clear();

rest;

// And we can use arrays and  maps too as map keys

// but in order to make that work we need to create an array out of map
// means we can directly create an array withing map as a key
// or even while setting with set()

arr;

rest.set(arr, "Test");

rest;

console.log(rest.get(arr));
// console.log(rest.get([11,22,33])); this is wrong because would create a new array

// And we can even use objects as map keys
// And this can be very useful with DOM elements which are just a special type of objects

// There is another way of populating maps (setting elements in to map)
// without using set()
// because set() could be a bit cumbersome when there are lot of values to set

// !Instead we can pass an array and in this array the first position is gonna be the key
// !And the second position is gonna be the value
// its just like passing a 2D array
// so we passed an array that has an array where its first value is key and 2nd is value

// const question = new Map([
//   ["Question", "What is the best programming language?"],
// ]);

const question = new Map([
  ["Question", "What is the best programming language?"],
  [1, "C"],
  [2, "C++"],
  [3, "python"],
  [4, "JavaScript"],
  [5, "Ruby"],
  ["correct", 2],
  [true, "correct"],
  [false, "Try Again"],
]);

question;
// so this is the preferred way of creating a new map
// [
//   [],
//   [],
// ]
// Object.entries() return the same structure
hours;
console.log(Object.entries(hours));

// Converting Objects to maps
const hoursMap = new Map(Object.entries(hours));
hoursMap;

// ==========

// Maps Iteration

// Maps are also iterables
// So we can use
// for of loop
// spread operator
// destructuring

for (quest of question) {
  console.log(quest);
  //gives each element
}
for (const [key, value] of question) {
  console.log(`${key}: ${value}`);
}

// ==========

// Sources of Data:

// From UI
// From Web API
// From program itself
// ==========

// Other Built In Data Structure

// weak set
// weak map

// Non Built In  or User Defined Data types

// Stacks
// Queues
// Linked List
// Hash Tables

// =======

// Arrays Vs Sets and Objects Vs Maps

// Arrays: Ordered List, So many methods to manipulate data

// Sets: Unique Values, high performance, to remove duplicates

// Object: key value pair, easy to write and access, can include functions, used when working with JSON

// Maps: Key value pairs, keys can have any type, better performance, used when we need to map keys to values that are not strings

// ! Your Past === Your Wisdom
