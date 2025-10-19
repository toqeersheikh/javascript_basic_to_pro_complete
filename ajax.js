"use  strict";

//? Step 0:
//! Call XML HTTP Request Method

// XMLHTTPRequest( ) allows you to send HTTP requests to a server without reloading the page.
const request = new XMLHttpRequest();
// It creates and returns an object — an instance of the built-in XMLHttpRequest class.
// we call methods like open() and send() on this instance.
console.log(request);

//? Step 1:
//! Open the Request

// open()
// used to initialize or configure the request before sending it.
// But it does not send the request — it just prepares it.

// Parameters that open() expects:

// 1. Request Method: GET,POST,DELETE,Or PUT etc
// 2. URL: To which the request is sent
// 3. Async: Default: true, Can be False (means synchronous) [optional]
// 4. User: Username For Authentication [optional]
// 5. Password: Password For Authentication [Optional]

request.open("GET", `https://restcountries.com/v3.1/name/pakistan`);

//? Step 2:
//! Send Request to the passed URL

// Send():
// It actually sends request to the server.

request.send();
// It will start fetching data in the background

//? Step 3:
//!  use Event Listener to take some action, when the result of AJAX call is arrived

// We can use:

// request.onload = function() { ... }
// request.addEventListener("load", function() { ... });

// Both do the same thing logically
// They both run your function when the request successfully finishes loading
// But the way they attach the handler is different.

// But we will use addEventListener():
// This uses the EventTarget API (modern event model).
// It allows you to add multiple listeners for the same event,
// and they all run in the order they were added.

request.addEventListener("load", function () {
  //   console.log(this.responseText); this here is = response object and responseText is a property on it
  //   Returned data from server is in JSON format so we need to convert it to JS object using JSON.parse()
  //   console.log(this);this = responseObject
  //   console.log(this.responseText); this.responseText = a property with our desired data but in JSON format
  //   const data = JSON.parse(this.responseText); this returns an array of object [{...}] so we need to destructure it

  const [data] = JSON.parse(this.responseText);
  console.log(data); // now we got an object with the data we are looking for
});
