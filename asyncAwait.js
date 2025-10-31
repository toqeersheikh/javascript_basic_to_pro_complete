"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

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
  countriesContainer.style.opacity = 1;
};

// ? Async & Await

// ! ES-2017 Feature

// ! Used to consume Promises

// Lets start by creating an Async Function
// So the whereAmI function that we were using
// Now lets make it Async function

// ! And we do this by simply adding the 'async' keyword

// So:

// ! const whereAmI = async function name(params) {};

// ? And this function is now an Asynchronous Function

// So a function that will keep running in the background while executing the code that is inside of it

// ! And when this function has done its job it will automatically return a promise

// ? And inside of an Async Function we cane have one or more 'await' statements

// ! 'await' statement

// ! And in front of await we need a promise, so an expression that returns a promise

// ! For example a fetch function returning a promise

// ? We use 'await' keyword to basically await for the result of a promise

// ! So basically await will stop the code execution at the point where we put await keyword in function
// ! Until the promise is fulfilled (resolved or rejected)

// for example until the data has been fetched

// ? Note:
// ! async without await — ✅ Allowed
// ! await without async — ❌ Not allowed (in most cases) except in some modern JS environments like top-level await in modules).
// “SyntaxError: await is only valid in async functions and the top level bodies of modules”

// ? Isn't it blocking the code execution?

// ! And the answer is Nope!

// ? Because stopping the code execution with await keyword in an Async function is not a problem att all

// ! Because this function is running Asynchronously in the background

// ! And so therefor it is not blocking the main thread of execution

// ! So it is not blocking the call stack

// ? Because remember any kind of Asynchronous task will run in the Web APIs environment in the runtime

// And infect thats what makes the Async/Await so special

// ! So its a fact that it makes our code look like regular synchronous code
// ! but behind the scenes it is infect Asynchronous

// ! So thats an overview of Async Await

// Lets get back to our whereAmI() example

// So we have:
// const res =await fetch("url")
// So as soon the promise is resolved
// ! Then the value of this whole await expression will be the resolved value of the promise

// And so we can simply store that into a variable

// const whereAmI = async function (country) {
//   const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//   console.log(res);
//     we got the response object in clean and elegant way
//    !We can simply await until the value of the promise is returned, and assign it to variable (which was impossible before)
// };

// whereAmI("pakistan");

// Synchronous Code: it will execute first, before the execution of whereAmI()
console.log("This is a proof that where Am I is an Asynchronous Function");

// ! As whereAmI is an Asynchronous Function, when it is called, it is then loaded off to the background
// ! And so fetch will run in the background without blocking our main thread

// ! So we escaped the callBack Hell
// ! We also escaped from using then handlers, while consuming promises

// ? But AsyncAwait is simply just an abstraction over the then() in promises

// ! the idea behind the scenes is still same

// So now we know How Async Await Works lets just simple re create the whereAmI function

// const whereAmI = async function (country) {
//   const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//    call JSON() on res which will also return a promise so use another await statement
//   const data = await res.json();
//   console.log(data);
//   renderCountry(data[0]);
// };

// btn.addEventListener("click", () => whereAmI("pakistan"));
// Great Our Data is rendered All without chaining of promises

// ! Elegant

// ! So being able to immediately store the fulfilled value of the promise in a variable
// Without having to mess with callBack functions

// So lets finish our function with geoCoding

// ? Note : Async/Await is only about consuming promises the way we build them is not influenced by these in any way

// This function will return a promise
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = async function () {
//   // ! Get Coordinates with GeoLocation API:
//   const pos = await getPosition();
//   const { latitude: lat, longitude: lng } = pos.coords;
//   // !reverse geocoding
//   const resGeo = await fetch(
//     `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
//   );
//   const geoData = await resGeo.json();
//   const { address } = geoData;

//   console.log(
//     `You are in ${address.district}, ${address.state}, ${address.country}`
//   );
//   // ! fetch country data
//   const resCountry = await fetch(
//     `https://restcountries.com/v3.1/name/${address.country}`
//   );
//   const dataCountry = await resCountry.json();

//   // ! render Country data
//   renderCountry(dataCountry[0]);
// };

// Call upon clicking button
// btn.addEventListener("click", whereAmI);

//? try catch for error handling with Async/Await

// Syntax:
// try {
//run this code
// } catch (err) {
//   alert(err.message);
// }

const whereAmI = async function () {
  try {
    // ! Get Coordinates with GeoLocation API:
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // !reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
    );
    const geoData = await resGeo.json();
    const { address } = geoData;

    console.log(
      `You are in ${address.district}, ${address.state}, ${address.country}`
    );
    // ! fetch country data
    const resCountry = await fetch(
      `https://restcountries.com/v3.1/name/${address.country}`
    );
    const dataCountry = await resCountry.json();

    // ! render Country data
    renderCountry(dataCountry[0]);
    return `You are in ${address.district}, ${address.state}, ${address.country}`;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

btn.addEventListener("click", whereAmI);

// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then((city) => console.log(city))
//   .catch((err) => console.log(err));

// Lets Convert this to Async Await

(async () => {
  try {
    const city = await whereAmI();
    console.log(city);
    if (!city) throw new Error("Cannot get location");
  } catch (err) {
    console.log(err);
  }
})();

// ? Promise Combinator Methods:
// ! These are all static methods available on Promise Constructors

// ! Promise.all()
// ! Promise.race()
// ! Promise.allSettled()
// ! Promise.any()

// ? Top Level Await:

// ! Starting From ES 2022 Version:
// ! We can now use Await keyword outside of Async  Functions

// AT least in modules

// ? We can only use Await keyword outside of Async Function which we call Top Level Await
// ? But this only works in modules

// ! And in normal script it will not work

// So it will only work in a script that look like this:
//? {/*  <script type="module" defer src="script.js"></script> */}
// ? because it has the: type="module"
// ! but typically we place this tag in our HTML file, here it is just for demonstration

// ? because it has the: type="module"
// ! So this is what is required in order to make the top level await Actually work

// ! So in a module we can do this:

// const res = await fetch((`https://restcountries.com/v3.1/name/pakistan`);
// const data=await res.json()

//  So using await keyword without Async function

// ? Now whats really important to understand here is :
// ! this actually blocks the execution of entire module now

// ! So infect the Await keyword which is now outside of the Async function is blocking the entire execution of the module which is something we haven't seen before

// This wasn't really possible before we got top level await

// ! Can be useful but harmful as well when it is a long running task
