"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// renderError from Error Handling
const renderError = function (msg) {
  countriesContainer.insertAdjacentText(
    `beforeend`,
    `Something went wrong! Error: ${msg}  Try Again please:)`
  );
};

//? Promises and Fetch API:

//! Promise: A Modern javascript (ES-6) Feature to escape Callback Hell

// Lets take a look at a Promise
//! By replacing the old XMLHttpRequest() with Fetch API

const request = fetch("https://restcountries.com/v3.1/name/pakistan");
// console.log(request);

// ! Fetch API Returns a promise, that we stored in request variable

// ? What is a promise?
// ! An object that is used as a placeholder for the future result of an asynchronous operation
// ! Its a container for a future value coming from an Asynchronous operation (Like as response of an AJAX call)
// ! So we can use a promise to handle future value

// ? Advantages:
// ! No need to rely on event Handlers and callback functions to create a sequence of Asynchronous Operations
// ! We can chain promises to escape callback hell to create a sequence of Asynchronous Operations

// ? LifeCycle of a Promise:
// ! Since Promises work with Asynchronous operations. They are time sensitive.
// ! So they change over time
// ! So promises can be in different states with time
// ! And this is what we call the life cycle of a promise

// ? States of Promise:
// ! Pending (in the very beginning before any resulting value, when asynchronous task is in progress)
// ! Settled (when the asynchronous task is finally finished)

// ? Types of Settled Promise:
// ! Fulfilled Promise (successfully got the resulting value, or requested data as expected)
// ! Rejected Promise (when there has been an error during Asynchronous task)

// Now we will be able to handle, these different promise states while using Promises so they are important to understand

// ! A promise is only settled once

// ! And from there the state will remain unchanged forever

// ! So a promise was either fulfilled or rejected but its impossible to change its state

// The Old Render Country Function
const renderCountry = function (data, className = "") {
  let lang = Object.values(data.languages);
  lang = lang.length > 1 ? lang[1] : lang[0];

  const html = `
          <article class="country ${className}">
          <img class="country__img" src=${data.flags.png} />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${lang}</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
  
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};

// ? Consuming Promises:

// Lets Learn How to Consume a promise that was returned by Fetch Function

//  Lets implement the getCountryData  function once again but this time using promises

// ! fetch() returns a promise

// Lets learn how to handle a promise when it is settled so either successful or rejected

// ! then()
// ! Used to handle the fulfilled state of the promise so the success state
// ! receives a callback function which receives an argument which is basically the response of AJAX call

// getCountryData function using Promises

// fetch() returns a promise
// call then() on the promise returned by fetch which will give us response of AJAX call
// but response is not readable yet so call JSON() on response
// JSON() is an asynchronous method available on all response objects that are coming from fetch,so all of the resolved values
// JSON() again return a promise, and to return it out of 1st then() we need to explicitly use return keyword
// then call then() again on the promise returning from 1st call of then()
// again we need to pass in a callback function with an argument data
// where we can finally read the data
// data is an array containing our desired data in form of object so [{...}]
// SO We got our object what we were looking for
// At the end just call renderCountry

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       console.log(data[0]);
//       renderCountry(data[0]);
//     });
// };
// getCountryData("pakistan");

// Super cool

//! Lets create a simpler Version of this function
// ! using arrow functions

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => renderCountry(data[0]));
// };

// this is beautiful

// getCountryData("pakistan");

// ? Chaining Promises:
// ! In Order to also render the neighbor country

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Country not found. Error: ${response.status} `);
      return response.json();
    })
    .then((data) => {
      // console.log(data[0]);
      renderCountry(data[0]);
      // console.log("test");
      // if (data[0].borders === undefined) throw new Error("No neighbor Found!");
      if (!data[0].borders) throw new Error("No neighbor Found!");
      console.log(data[0].borders);
      const neighbor = data[0].borders[0];
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
    })
    .then((response) => {
      // if (!response) return;
      return response.json();
    })
    .then((data) => {
      // if (!data) return;
      renderCountry(data[0], "neighbor");
    })
    .catch((err) => {
      console.error(`${err.message}`);
      renderError(err.message);
    })
    .finally(() => {
      console.log("From Finally");
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener("click", function () {
  getCountryData("australia");
});

// So instead of callback Hell we have a flat chain of promises
// ! then() always return a promise unless we explicitly return something and then that will be the resulting value of then() AKA Fulfilled value - Success Value

// You may think that we are still using callbacks
// then promises are not a replacement of callback functions but this is a solution to escape callback hell

//? Error Handling:

// ! Use Catch method
// Errors propagate down the chain until they are caught
// So using catch method we can catch them
// ! Catch method also return a promise means we can further call methods like finally in the chain
