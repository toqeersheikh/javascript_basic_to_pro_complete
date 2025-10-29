"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// ? Navigator:

// ! Navigator is an Object that represents the web browser
// “Actually it is just an object that acts as an interface.”
// Object instance created by the browser that acts as that interface — implemented via prototype-based inheritance.

// Type : Property of the global window object
//! Purpose : Provides info & access to device/browser features
// Examples: navigator.geolocation, navigator.clipboard, navigator.onLine, etc.

// ? GeoLocation API:
//! The navigator.geolocation API in JavaScript allows web applications to get the user's current geographic location — like latitude, longitude, and sometimes even altitude or speed — using the device’s GPS, Wi-Fi, or IP address.

// navigator.geolocation

// ? getCurrentPosition()
// ! A  method that asks the browser to get the user’s current geographic location once (latitude, longitude, etc.)..

// ? Arguments:
// successCallback : Called when location is successfully obtained
// errorCallback : Called if there’s an error (user denied, timeout, etc.)
// options : Configuration options (like accuracy, timeout, cache)

navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position.coords);
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
    // So this is how we get the users current location coordinates
  },
  (err) => console.log(err)
);

// ! Now GeoLocation is purely a callback based API and lets make it a promise based API

// render Country
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

// get country based on coordinates: the old version
// const whereAmI = function (lat, lng) {
//   if (typeof lat !== "number" || typeof lng !== "number") {
//     console.log("Coordinates are in incorrect form");
//     return;
//   }
//   fetch(
//     `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
//   )
//     .then((response) => {
//       // console.log(response);
//       if (!response.ok)
//         throw new Error(
//           "No location Found, Coordinates doesn't exists or Incorrect!"
//         );
//       return response.json();
//     })
//     .then((data) => {
//       // console.log(data);
//       // console.log(data.address);
//       const { address } = data;

//       // console.log(address);
//       console.log(`You are in ${address.city} ${address.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${address.country}`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found. Error: ${response.status} `);
//       return response.json();
//     })
//     .then((data) => {
//       // console.log(data[0]);
//       renderCountry(data[0]);
//     })
//     .catch((err) => {
//       // console.log("test");
//       console.error(err.message);
//     })
//     .finally(() => {
//       // console.log("from finally");
//       countriesContainer.style.opacity = 1;
//     });
// };

// To make the geolocation API promise based we will make a new promise by ourselves and return it from the function
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => resolve(position),
//       (err) => reject(err)
//     );
//   });
// };

// we can do exact same function in this fashion: it is just the same thing as implemented above
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// now as we know getPosition() will return a promise and to handle that we have to use the then()

getPosition()
  .then((res) => console.log(res.coords))
  .catch((err) => console.log(err));
// So we just promisified the GeoLocationAPI

//! we can make a  function to render our location based on the coordinates given by the browser

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
      );
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(
          "No location Found, Coordinates doesn't exists or Incorrect!"
        );
      return response.json();
    })
    .then((data) => {
      const { address } = data;
      console.log(`You are in ${address.city} ${address.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${address.country}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found. Error: ${response.status} `);
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
    })
    .catch((err) => {
      console.error(err.message);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener("click", whereAmI);

// This is how we can promisify any callback based process
