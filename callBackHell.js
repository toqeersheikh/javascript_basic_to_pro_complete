"use strict";

// Welcome to callback Hell

// Lets create a sequence of AJAX calls so that the second one only runs after the first one has finished it's

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// console.log(btn);
// console.log(countriesContainer);

const renderCountry = function (data, className = "") {
  let lang = Object.values(data.languages);
  // console.log(lang);
  // console.log(lang.length);
  lang = lang.length > 1 ? lang[1] : lang[0];
  // console.log(lang);

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
  countriesContainer.style.opacity = 1;
};

// Get Country
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);
    // console.log(data.name.common);
    // console.log(data.region);
    // console.log(Object.values(data.currencies)[0].name);
    // console.log((data.population / 1000000).toFixed(1));
    // console.log(Object.values(data.languages)[1]);

    // AJAX Call for Neighbor Country:
    // So this AJAX call depends on the first one, until the first call has finished it will not be made
    if (data.borders === undefined) return;
    const [neighborCountry] = data.borders;
    // console.log(neighborCountry);
    const request2 = new XMLHttpRequest();
    request2.open(
      "GET",
      `https://restcountries.com/v3.1/alpha/${neighborCountry}`
    );
    request2.send();
    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      renderCountry(data2, "neighbor");
    });
    // So this is a callback hell (nested callbacks) : 2nd AJAX calls depends on 1st One
  });
};

getCountryData("brazil");

// ? What is CallBack Hell?
// ! When we have a lot of nested callbacks in order to execute asynchronous tasks in a sequence
//! So Callbacks inside of Callbacks inside of Callbacks many times nested Callbacks

// For example:

setTimeout(() => {
  console.log("1 second Passed");
  setTimeout(() => {
    console.log("2 second Passed");
    setTimeout(() => {
      console.log("3 second Passed");
      setTimeout(() => {
        console.log("4 second Passed");
        setTimeout(() => {
          console.log("5 second Passed");
          console.log("Callback Hell");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

console.log(
  "Synchronous Code executing First even though it is at the end of document, Because Asynchronous runs in the background "
);

// So here we can see there are a lot of callbacks : The so called callback Hell

// ! The 2nd callback will only execute when the first one has done it's job

// ! So  they are executing in a sequence asynchronously

// ! Forming a triangular Indentation

// ! Looks messy
