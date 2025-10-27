// ! You were born to conquer your fears not to afraid them
console.log(" You were born to conquer your fears not to afraid them");

("use strict");

//! Lets build a simple Promise by demonstrating the lottery example:

// ? Promise:
// ! Promises are essentially just a special type of Object
// ! An Object that is used as a placeholder for the future result of an Asynchronous Operation

// We Can make our own Promise Objects to handle asynchronous tasks

// ? Building a new Promise:
// ! Use Promise Constructor : new Promise()
// ! Pass an argument into constructor: the executer function
// ! new Promise(function(){})

// ! the executer function further takes in two arguments: Resolve Function and Reject Function
// ! And this Promise Constructor returns a new promise, so we can capture it in some variable

// ? The Executer Function:
// ! The executer function is the one which will contains the Asynchronous Behavior that we are trying to handle with the promise
// ! Now as soon as the promise constructor runs, it will automatically execute this Executer Function
//  ! And this executer function should eventually produce a resolved value
// ! So a value that is basically gonna be the future value of the promise

// So:

// ! new Promise (function(resolve,reject){})

// ? resolve function: To mark the promise as fulfilled
// ? reject function: To mark the promise as rejected

// ! Example:

// Lets demonstrate the lottery example where
//  Fulfilled Promise means to win the lottery
//  Rejected Promise means to loose

// ! Lets generate a random number between 0 and 1 to determine the result of lottery
// number>=0.5 means win
// number<0.5 means loose

// So lets build the promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) {
//     resolve("You won the lottery:)");
//   } else {
//     reject("You lost your money");
//   }
// });

// console.log(lotteryPromise);
// so here we can see our promise

// ? Consuming Custom build Promise:

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// ! However this is not really Asynchronous Behavior Yet

// So lets simulate this lottery example by adding simple timer to demonstrate Asynchronous behavior

// To simulate the time that is passed between buying the lottery and getting the result

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lottery Draw is happening");
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       console.log("Congrats You won the lottery");
//     } else {
//       console.log("You lost your money");
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// So with this we actually encapsulated some Asynchronous behavior into this promise
// And thats the whole point of promises in first place
// They are meant to store the result of Asynchronous Operations

// Now in practice, most of the time we usually only consume promises

// ! And we actually only build Promises to basically wrap Old Fashioned Callback based functions into Promise based

// let see

// ===========

// ? Promisifying:
// ! Means to convert Callback based Asynchronous behavior into Promise based

// let see that in action

// Lets promisify SetTimeOut function and create a Wait Function

// So we will create a function and return a promise from it
// So essentially thats what the fetch function does, so it is a function that returns a promise

//! promisify setTimeOut

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, 1000 * seconds);
  });
};

// ! We are only using the resolve function in setTimeOut because there is no reason that setTimeOut can fail
// So we don't need to pass in the reject function
// And we don't even need to pass in the value
// So setTimeOut will call the resolve function (means promise is fulfilled) after the given time has passed

// So for example:

// wait(2)

// this will return a promise with fulfilled state after 2 seconds

// And we can consume it using then():

// wait(1).then(() => {
//   console.log("Waited 1 seconds");
// });

// And we can even chain the Asynchronous Operations to implement a timer just like we did using the callBack Hell example

// wait(5)
//   .then(() => {
//     console.log("I waited 5 seconds");
//     return wait(4);
//   })
//   .then(() => {
//     console.log("I waited 4 seconds");
//     return wait(3);
//   })
//   .then(() => {
//     console.log("I waited 3 seconds");
//     return wait(2);
//   })
//   .then(() => {
//     console.log("I waited 2 seconds");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("I waited 1 second");
//   });

// a simple counter
// console.log("========= Counter ==========");

// wait(1)
//   .then(() => {
//     console.log("1 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("2 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("3 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("4 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("5 second passed");
//     return wait(1);
//   });

// ? So here we are chaining Asynchronous behavior in a sequence without being trapped in a callback hell
// So this is the power of promises

// ! But actually JavaScript has no sense of time it is monitored by the runtime
// ! SetTimeOut does not guarantee you about the precision of time, it can be late depending on the current situation of callback Queue
// ! But it only guarantee you that this will not run before the given time

// We did the same thing just like this:
// setTimeout(() => {
//   console.log("1 second Passed");
//   setTimeout(() => {
//     console.log("2 second Passed");
//     setTimeout(() => {
//       console.log("3 second Passed");
//       setTimeout(() => {
//         console.log("4 second Passed");
//         setTimeout(() => {
//           console.log("5 second Passed");
//           console.log("Callback Hell");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// ==============

// ? And there is a another way of for creating the fulFilled or Rejected Promises

// ? Resolve():
// ! A static method on Promise Constructor

// ? Promise.resolve("resolved Value")
// ! Immediately returns the resolved value from promise

// ? Promise.reject("Error Message")
// ! use to immediately reject the promise

// resolve():
Promise.resolve("Promise fulfilled via resolve( ) ").then((res) =>
  console.log(res)
);

// reject():
Promise.reject("Promise Rejected").catch((err) => console.error(err));

// So this how we build our own promises
