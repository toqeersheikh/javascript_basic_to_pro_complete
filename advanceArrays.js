"use strict";

// Simple Array Methods:

// Arrays are also Objects thats why we can call methods at arrays

let arr = ["a", "b", "c", "d", "e"];

// Slice();

// Very Similar to slice method available for strings

// use to extract part of an array
// without changing the original array
// so we can take a slice out of an array using this method

// Parameters:
// 1. Index where the extraction will start : arr[index] included in output array
// 2. Index where the extraction will end : arr[index] excluded from output array

// Return a new array with extracted elements

const slice1 = arr.slice(2); // arr[2]
// start extraction from index 2 or 3rd element of array
console.log(slice1);

const slice2 = arr.slice(2, 3);
console.log(slice2);

// Length of output array = End parameter -1

// we can define a negative parameter of starting point
// which will start extraction from the end of array
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(-3));

// So with this it is pretty easy to get the last element out of array
// const last = arr.slice(-1);
const [last] = arr.slice(-1);
// destructuring it to get it out of array
last;
// btw we can also do this
console.log(arr[arr.length - 1]);
// Cool

// And we can also use negative index as the end parameter
// let see
arr;

console.log(arr.slice(0, -2));
// what this mean is start extraction from 1st element and extract everything to end except last 2 elements

console.log(arr.slice(2, -1));

// creating shallow copies of array using slice ()

const copyArr = arr.slice();
// call slice() with no arguments
console.log(copyArr);

// and we can do the same using spread operator (...)

console.log([...arr]);

// slice() vs spread operator:

// it's personal preference
// you can use slice() when you want to chain multiple array methods

// ===============

// Splice()

// Works almost same way as slice()
// But it does change the original array
// So it mutates that array

// Parameters:
// 1. index where the extraction should start : arr[index] is included in the output array
// 2. delete count (the number of elements that we want to delete)

// But the extracted elements will be gone from array
// the extracted elements are returned in form of a new array but they do not belongs to the original array anymore
// all the remaining elements are left in the original array

arr;
const res = arr.splice(3);
arr;
res;

// So Splice() method deletes the extracted elements from array
// So it takes out a part of array and return it

const arr2 = [...arr];
arr2;

// we use splice usually to delete some elements from an array
// Deleting last element of array using splice
// just pass in the last index of array

arr2.splice(2);
arr2;
// last element is gone from array

// passing a negative index
// means deletion will start from end of array
arr2.splice(-1);
arr2;

// using delete count parameter in splice
const newArr = ["J", "K", "L", "M", "N", "O", "P"];

const dlt = newArr.splice(2, 4);
// start deleting from index 2
// and delete 4 elements

newArr; //original array
dlt; //elements that are deleted

// ==========

// Reverse();
// it reverse an array
// and it does change the original array
// and it also return the reversed array

const arr1 = ["J", "K", "L", "M", "N", "O", "P"];
arr1;
arr1.reverse();
arr1;

// =======

// Concat();
// used to concatenate two or more arrays;
// return a merged array
// and does not impact the original array

arr;
newArr;
arr1;

// const mergedArray = newArr.concat(arr1);
const mergedArray = newArr.concat(arr1, arr);

mergedArray;

arr;
newArr;
arr1;

// ! and we can also merge arrays using  spread operator, without mutating the original arrays

// =========

// Join();

// returns a string of array elements with a separator (could be any thing like . , - / | etc)
//  and it does not impact the original array

const stArr = mergedArray.join("-");
stArr;

// =========

// Looping Arrays:

// USING For Of Loop
// used to loop over arrays
// we can use continue and break statements as well
//  and we can also use entries method if we want to access the counter variable for example accessing the current index of the array

// lets create a transactions array for demonstration

const transactions = [10000, 50000, -2000, 50000, -25000];

// lets assume that:
// positive values are deposits
// negative values are withdrawals

// and now lets print a string using for of loop

// it will loop over the array and give us each element one by one
for (const transaction of transactions) {
  if (transaction > 0) {
    console.log("cash deposited");
  } else {
    console.log("cash withdrawn");
  }
}

// using entries method inside for of loop
// entries will loop over the entire array
// in each iteration it will give an array with each element and it its index
// like this : [i, element]
// and then we can immediately destructure that to get index and value of the element itself
// and thats how we can further access to counter variable of each element

for (const [i, transaction] of transactions.entries()) {
  //   console.log(i);
  //   console.log(transaction);
  if (transaction > 0) {
    console.log(`Cash deposited, transaction: ${i}, Amount ${transaction}`);
  } else {
    console.log(
      `Cash Withdrawn transaction: ${i}. Amount: ${Math.abs(transaction)}`
    );
  }
}

// =============
// =============

// Using Foreach method
// Its an array method
// loop over the array
// forEach accept a call back function that will be executed upon each iteration
// And its the forEach method who will call the function for
// the callback function accept three parameters / or in other words it gives us access to three things:
// 1. the current element
// 2. index / counter variable
// 3. the array
// now the name of arguments doesn't matter but their order is very important
// its just the way, mentioned above
// we can use any of them or all of them depends on need
// forEach don't have continue and break statement
// means if you want to escape the loop there is no way you just go through till the end of loop

transactions;

// Parameters:
// the first parameter always needs to be the element
// the 2nd parameter must be the index
// the 3rd parameter will be the entire array

transactions.forEach(function (transaction, i, arr) {
  if (transaction > 0) {
    console.log(`Cash Deposited! Transaction: ${i} Amount: ${transaction}`);
  } else {
    console.log(
      `Cash Withdrawn! [Transaction: ${i} Amount: ${Math.abs(transaction)}]`
    );
  }
  // console.log(arr); entire array will  be printed each time
});

// ==========
// ==========
// ==========

// Data Transformation Methods

// Map()
// Filter()
// Reduce()

// These are the methods that we used to create new arrays based on transforming data from other arrays

// The Map()
// Used to Loop over an array
// Similar to ForEach
// takes a callback function as an input
// Parameters:
// element
// the index
// and the array

// But Map creates a brand new array based on the original array

// So it takes an array loops over it
// And in each iteration it applies a callback function on the current element

// And after function processing it puts each element into a brand new array

// We say that it maps the values of original array to a new array thats why it is called map method

// its more useful than forEach
// very popular in modern JavaScript
// because it not only do some work but also return a brand new array
// containing the results of applying an operation  to the original array

const num = [7, 10, 9, 3];
const numSquare = num.map((n) => n * n);
numSquare;

// =======

// Filter()

// it also accepts a callback function

// it will loop over the entire array and pass each element in the callback function in each iteration

// we can access to:
// Parameters:
// element
// the index
// and the array

// Used to filter for the elements in the original array based on a certain condition
// return a new array with filtered elements

num;
// let say we want to find elements > 5
// we can use filter()
// So only elements that pass the test that we specified will make it into a new filtered array
// our new array should look like this:
// [7,10,9]

// or in other words elements for which the condition is true will be included into a new array

const filteredArr = num.filter((v) => v > 5);
filteredArr;

// =========
// =========

// Reduce()

// Loops over the array
// Accepts a callback function
// And the initial value of the accumulator as 2nd argument

// Parameters of callback function :

// Accumulator : the running result (it “remembers” the value from the previous iteration) ie sum
// CurrentValue
// Index
// Array

// initialValue:

//  A starting value for the accumulator.

// If you don’t provide it → the first element of the array is used as the initial value.

// We use reduce method to boil down all the elements of the original array into one single value

// return a single value not any array , so a reduced value

// And an example of this could be to add all the elements of an array together

// But of-course we can also do many other interesting things

num;
const sum = num.reduce((acc, value) => acc + value, 0);
sum;

// =========
// =========

// The find method

// Loops over the array

// Accepts a callback function

// used to retrieve one element out of an array based on a certain condition

// return a single value
// And it will only return the first element where the condition was true
// do not return an array

transactions;
const withdrawals = transactions.find((t) => t < 0);
withdrawals;

// so it returns the first withdrawal

// ! Similar to filter() but basic different is that filter() returns an array with all the elements that satisfies the condition and find() return a single value

// =========
// =========

// The FindIndex Method;

// Works Almost same way as find()

// But the findIndex() return the index of the first element that satisfies some condition given by the callback function
// and not the element itself

// If No element found it returns -1
// And it stops searching after finding the first match (faster than searching all)

// so it accepts a callback Function

// Parameters:

// currentElement

// currentIndex

// And the array

// ! In many array methods (like map, filter, find, findIndex, some, every, forEach), you can pass a second argument after the callback → this is the thisArg.

// ! It sets what this refers to inside the callback (but only if you use a regular function, not an arrow function).
// And in strict mode: This is undefined in regular functions
// And in arrow function: The value of this is lexical means it comes from surrounding parent

// Example of findIndex()

num;

// Lets find the index of first even number

const evenNum = num.findIndex((n) => n % 2 === 0);
evenNum;

// Find Index in array of objects

const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Nayla" },
  { id: 3, name: "Dexter" },
];

users;
const index = users.findIndex((user) => user.name === "Dexter");

index;

// ==========
// ==========

// Includes();

// and its a normal array method it don't loop array
// Used to test if an array includes a certain value
// But we can only test for equality

// So it returns true if any value is exactly equal to the value pass in the include() to some value in an array
// otherwise false

transactions;
const isIncluded = transactions.includes(-25000);

isIncluded;

// But what if we want to test for a condition
// Thats where some method comes into play

// The Some()

// loop over the array

// it accepts a callback function which will return true or false

// Callback Parameters:

// element
// index
// array
// thisArg (value of this) optional

transactions;
// let's check if there is any positive transaction in the array

const isDeposit = transactions.some((transaction) => transaction > 0);
isDeposit;

const isDeposit2 = transactions.some((transaction) => transaction > 50000);

isDeposit2;

// =======
// =======

// Every Method

// Loops over the array

// pretty similar to some()

// Accepts a callback function

// Callback Parameters:

// element
// index
// array
// thisArg

// but every only returns true if all of the elements in the array satisfies the condition that is passed into the callback function

// in other words if every element passes the test only then the callback function will return true

// if any elements fail it will return false

// and it stops checking as soon one element fails

const isEvery = transactions.every((transaction) => transaction > 0);
isEvery;

// =======
// =======

// Flat Method

// It removes nesting from arrays

// Also removes empty slots from arrays

// It creates a new array with all the sub arrays merged or flattened into it

// No callback function

const nestedArr = [
  [1, 2, 3],
  [3, 4, 5],
  [6, 7, 8],
];

const flatArr = nestedArr.flat();
flatArr;

// But it only goes deep at one level  when flattening the array

const nestedArr2 = [
  [[1, 2, 3], [[9, 10, 11], [12]], [[3, 4, 5]]],
  [6, 7, 8],
];
// this is highly nested

// to flat this flat method accepts an argument known as depth
// By default it is
// nestedArr.flat(1)

const flatArr2 = nestedArr2.flat(3);

flatArr2;
// so we can define the level of depth in the flat method
// cool

// And even we can pass Infinity

// Depth = Infinity
// nestedArr2.flat(Infinity); wow :)
// use infinity if you don't know how deep nesting goes

// =======
// =======

// FlatMap Method

// Flat method combines map and flat method

// essentially its just the map method that will flat the resulting array in the end

// better for performance

// it accepts a callback function

// callback parameters:

// Element
// Index
// Array
// thisArg

// but flatmap only goes one level deep to flat the array

// means if you need to flat any nested array then you still need to use flat method

const naturalNumbers = [1, 2, 3, 4, 5];

const nSquare = naturalNumbers.flatMap((n) => [n, n * n]);
// each number is mapped to a pair and then flattened
nSquare;

const nums = [1, 2, 3, 4, 5];

// Keep only odd numbers, discard even ones
const result = nums.flatMap((n) => (n % 2 === 0 ? [] : [n]));

console.log(result);
// [1, 3, 5]

// difference from map
const numbers = [1, 2, 3];

const mapResult = numbers.map((n) => [n * 2]);
console.log(mapResult);
// [[2], [4], [6]]

const flatMapResult = numbers.flatMap((n) => [n * 2]);
console.log(flatMapResult);
// [2, 4, 6]

// =======
// =======

// Sorting Arrays

// There are many types of sort in general programming , like merge, quick, insertion, selection and radix sort etc

// but here we will only learn about javascript built in array.sort() method

// Array.sort():

// mostly we use it for an array of strings

// sort elements as strings in lexicographic order not alphabetical

// lexicographic = (alphabet + numbers + symbols) as strings

// so javascript treats numbers as strings while sorting

// loops over the array

// It mutates the original array

// Used to sort an array in ascending order or descending order

// To sort numbers we need to pass a comparison function which is a callback function

// It accepts a compare function which will define the order

// And if no compare function passed then the array is just sorted in alphabetical order

// The Compare Function Parameters:

// a, b : which represent the element being compared

// a : currentValue
// b : nextValue

// The sort method calls the compare function repeatedly to compare elements in array being sorted

// ! The sort method uses returned values to determine the order in which the elements will be sorted

transactions;
// Sorting in Ascending or Increasing Order
// ! if a-b>0 swap A with B
// ! if a-b<0 no swap

transactions.sort((a, b) => a - b);

transactions;

// Now to make it in descending or Decreasing Order we can reverse()

// Using Reverse()

transactions.reverse();

transactions;

// Or we can also use the comparator function with different logic

numbers;

numbers.sort((a, b) => b - a);

numbers;

// Cool

// Lets see another example

const people = [
  {
    name: "tony",
    age: 28,
    cgpa: 3.0,
  },
  {
    name: "toqeer",
    age: 24,
    cgpa: 3.2,
  },
  {
    name: "Mohid",
    age: 21,
    cgpa: 3.5,
  },
  {
    name: "Haris",
    age: 23,
    cgpa: 2.9,
  },
];

// lets sort this array of people by age

people.sort((a, b) => a.age - b.age);
people;

// sorted by gpa
// let say higher to lower

people.sort((a, b) => b.cgpa - a.cgpa);
people;
people.reverse();
people;

// So let say if we need to sort by a property that contains there is a different formula for that;

// we will use the built in localCompare()
// this method will examine two strings for lexicographic order

people.sort((a, b) => a.name.localeCompare(b.name));

people;
