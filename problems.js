"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// ================
// ================
// ================

// ! Coding Challenge #1

/*
Coding Challenge #1
In this challenge you will build a function 'whereAmI' which renders a country
only based on GPS coordinates. For that, you will use a second API to geocode
coordinates. So in this challenge, you’ll use an API on your own for the first time  

PART 1
1.⁠ ⁠Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
and a longitude value ('lng') (these are GPS coordinates, examples are in test
data below).
2.⁠ ⁠Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
to convert coordinates to a meaningful location, like a city and country name.
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
will be done to a URL with this format:
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
promises to get the data. Do not use the 'getJSON' function we created, that
is cheating  
3.⁠ ⁠Once you have the data, take a look at it in the console to see all the attributes
that you received about the provided location. Then, using this data, log a
message like this to the console: “You are in Berlin, Germany”
4.⁠ ⁠Chain a .catch method to the end of the promise chain and log errors to the
console
5.⁠ ⁠This API allows you to make only 3 requests per second. If you reload fast, you
will get this error with code 403. This is an error with the request. Remember,
fetch() does not reject the promise in this case. So create an error to reject
the promise yourself, with a meaningful error message
PART 2
6.⁠ ⁠Now it's time to use the received data to render a country. So take the relevant
attribute from the geocoding API result, and plug it into the countries API that
we have been using.
7.⁠ ⁠Render the country and catch any errors, just like we have done in the last
lecture (you can even copy this code, no need to type the same code)

*/

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
  // countriesContainer.style.opacity = 1;
};

// ! Solution 1:

const whereAmI = function (lat, lng) {
  if (typeof lat !== "number" || typeof lng !== "number") {
    console.log("Coordinates are in incorrect form");
    return;
  }
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
  )
    .then((response) => {
      // console.log(response);
      if (!response.ok)
        throw new Error(
          "No location Found, Coordinates doesn't exists or Incorrect!"
        );
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      // console.log(data.address);
      const { address } = data;

      // console.log(address);
      console.log(`You are in ${address.city} ${address.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${address.country}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found. Error: ${response.status} `);
      return response.json();
    })
    .then((data) => {
      // console.log(data[0]);
      renderCountry(data[0]);
    })
    .catch((err) => {
      // console.log("test");
      console.error(err.message);
    })
    .finally(() => {
      // console.log("from finally");
      countriesContainer.style.opacity = 1;
    });
};

// ? Reverse GeoCoding:

// ! Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name.
// Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// Coordinates 2: 19.037, 72.873
// Coordinates 3: -33.933, 18.474

// whereAmI("add", 13.381);
// whereAmI(-33.933, 18.474);
// whereAmI(19.037, 72.873);
// whereAmI(31.3708, 74.3587);

// btn.addEventListener("click", function () {
//   // whereAmI("add", 13.381);
//   whereAmI(-33.933, 18.474);
//   // whereAmI(19.037, 72.873);
//   // whereAmI(31.3708, 74.3587);
// });

// ===============

// ! Coding Challenge #2
