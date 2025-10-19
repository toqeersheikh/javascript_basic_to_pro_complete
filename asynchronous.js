"use strict";

// ! The Goal of Asynchronous JavaScript is to Deal with Long running tasks

// ? What is Synchronous Code?

// Its the opposite of Asynchronous

// Synchronous simply means the code that is executed line by line , in the exact order of execution that we defined in our code

// ! So each line of code waits for previous line to finish it's execution
// For example line no 2 will not be executed until or unless the line no 1 finishes its execution

// ? Example:

// alert("Some Message")
// it is a perfect example of synchronous code;
// So it will stop the execution until it finishes its execution so nothing will happen on page

// ? Problem With Synchronous Code:

// Now this can create problems, when one line of code takes a long time to run
// For example the alert() we discussed
// This will pop up an alert window on browser page
// And this alert window will block the code execution
// So nothing will happen on the page until we click that OK button!
// And only then the code can continue executing

// ! So alert operation is a perfect example of long running task which blocks the code execution

// ! So long running operations block code execution

// So this is the problem with Synchronous Code

// ! Long running Tasks:

// So if a task is long running, that takes long time to finish it's execution and it is executing in a Synchronous way then it is a problem because mean while nothing will happen on the page which will be annoying for a normal user

// ! Blocking Behavior

// So again Synchronous Code has a blocking nature, it blocks the execution of code, so if a synchronous operation is long running, then its blocking nature could be a serious  issue

// Most of the time synchronous code would work fine

// But in some case this could create serious issues

// Thats where asynchronous code comes into play

// ? Asynchronous Code

// ! Example
// setTimeout(function(){
//logic
// },5000)

// Now SetTimeout is an asynchronous function that will start a timer in the background for a certain time and then execute the callback function corresponding to it,

// So its start the timer in an asynchronous way

//! The timer will essentially run in the background without preventing the main code from executing
// So everything else will keep executing according to the flow of program

// And the callback function passed into it will not be executing but only after the timer has finished running

// This callback function that we mentioned is just asynchronous javascript

// And it is asynchronous because it is only gonna execute after a task that is running in the background finishes its execution and in this case that is a timer

// ? Non Blocking Behavior:

// Asynchronous code is non blocking in nature because it does not prevent the main code from executing

// Asynchronous Code is executed after a task that runs in the background finishes for example a callback function associated with settimeout

// So this callback function is just registered and then immediately the control moves to the next line

// So the main code is not being blocked

// ? What exactly is Asynchronous Code?

// ! Asynchronous Code is non blocking

// Execution does not wait for an asynchronous task to finish it's work .
// In the mean time the rest of the code can keep running
// And thats the big difference  between synchronous and asynchronous code

// ? how?

// Now when the timer finally finishes after 5 seconds , the callback function will finally executed as well

// ! So basically an action was deferred into the future in order to make the code non blocking

// ? Asynchronous Literal Meaning?

// ! "It literally means not occurring at the same time  "
// And so thats what the asynchronous is all about

// So in the setTimeout example we needed a callback function to implement the asynchronous behavior

// However this does not mean that the callback function automatically made code asynchronous

// Thats just not the case

// ! Only Call Back functions does not made the code Asynchronous

// ! For example: Array.prototype.map();

console.log([1, 2, 3].map((v) => v * 2));

// We passed a callback function into it but it is not an asynchronous function at all

// ! So Only Certain Functions Work in an Asynchronous Way

// We just have to know which functions and work and which do not

// ! For example Setting the source attribute is also an asynchronous operation

// ! img.src="dog.jpg"
//  Because loading a heavy image can take longer time so we want to keep executing our code in the mean time
// Thats it is implemented in an asynchronous way in the javaScript it runs in the background so it wont interrupt the other code

// And we can add an Event Listener to listen to the Load Event and came to know when it is loaded

// So again Event Listeners Alone Do not make the code Asynchronous just like the callback functions
// Because they are not doing any work in the background

// ! Other Examples of Asynchronous Operations:
// An API call: GeoLocation API
// AJAX Calls

// AJAX calls are the most important use of Asynchronous JavaScript

// So that is an intro to Asynchronous JavaScript

// ===================
// ===================
// ===================

// ? What are AJAX calls ?

// ! AJAX:

// ! Asynchronous JavaScript and XML

// It Allows us to communicate with remote web servers in an Asynchronous Way

// With AJAX We can request data from web servers dynamically

// ? How AJAX works?

// So let say that our JavaScript application is running in the browser : AKA CLIENT SIDE

// And we want the application to get some data from a web server, let say some data about countries

// AKA SERVER SIDE

// So with AJAX we can do an HTTP request to the server which has this data : HTTP Request

// And the server then send back a response containing that data that we requested : RESPONSE

//! And this back and forth communication between Client and Server all happen asynchronously

// And there can be different types of requests like as:

// ! GET : to request data from server

// ! POST : to send data to server

// and many more request methods

// Now when we are asking a server to send us some data, This usually contain a web API

// Let See What are web APIs?

//? API in general ?

// ! An API defines what you can ask for and what you’ll get back — without exposing how it’s done.

// ! Application Programming Interface

// API makes it possible for different systems to interact with each other
// We can think of API as a set of rules and protocols that allows different softwares to talk to each other
// It allows developers to access data or functionality from another application
// So an API focus on communication and information exchange between apps
// Developers use API to add features and functionality to their application without rewriting a code that can be find else where
// For example if you want users to be able to translate text within your app it's probably not reasonable to add multi language dictionary in your application
// But you can easily use a Google translate API to seamlessly provide the service to your user
// The same idea applies to:
// Accepting payments online
// Social Media Integration
// Maps and Location Services
// And More ...

// These are all the challenges that have been solved already
// And you can save time and money by leveraging an existing API to handle these functions for you in your app

//! 1. Server = The Computer (Hardware or Cloud Machine) A special and More Powerful Computer

//! 2. API = Software Running on That Server — the API is the software part. It’s the backend code that:

// Listens for requests from the client

// Talks to the database

// Sends back responses (like JSON data)

// It lives on the server (inside that computer

//! 3. Database = Also Software (May Live on Same or Different Server)

// Here’s the key point:
// A database is also software, not just files.
// It runs on a server too — but not always the same one as the API.

// ? So the Correct Picture Is:

// Client (Browser or App)
//        ↓
// API (Software running on the Server)
//        ↓
// Database (Software that may live on same or another Server)

// 🧠 In Simple Words

// The server is the computer.
// The API and database are software that run on that computer.
// The API talks to the database, and both live on one or more servers.

// ! For example an ecommerce website hosted in hostinger hosting service:

// Your frontend runs on the user’s browser or phone, showing the interface.
// Your API (backend) lives on the Hostinger server, handling requests and CRUD operations, while your database in Hostinger’s cloud stores all your data.
// For online payments, your app connects to PayPal or Stripe’s API, which lives on their own servers and securely processes transactions.

// ? “What makes an API able to communicate with other software?

// ! APIs Speak a Universal Language — Protocols

// APIs use internet protocols that all systems understand — no matter what language they’re built in.
// Most common one:
// 👉 HTTP / HTTPS
// So even if your server uses Java and another uses Python — they can still talk easily using HTTP requests and JSON responses.
// ! APIs Have Defined Endpoints (Routes)
// These endpoints tell other software exactly where to send requests and what to expect back.
// So, APIs open doors that other programs can use to reach your system.

// ! APIs Define Input and Output Rules

// An API describes:

// What kind of data it expects (JSON, Form Data, etc.)

// What kind of response it returns (success, error, etc.)

// ! APIs Handle Authentication & Authorization

// APIs can check:

// Who is sending the request (using tokens, keys, or credentials)

// Whether they’re allowed to do that action

// This is what makes APIs secure and controlled — not just open access to everything.

// ! APIs Are Hosted on Servers Connected to the Internet

// Unlike normal classes that exist only in your local program,
// APIs live on servers that are accessible through the web (via URLs).

// That’s why other software, even from different locations, can connect to them.

// ! APIs Use Standard Formats and Protocols

// ? How the Flow Works ?

// ! ✅ You send a request from your MacBook browser (client).

// ! ✅ The request travels via the internet to a physical server somewhere.

// ! ✅ The hardware server receives it.

// ! ✅ The server software (for example, a Node.js app) running on that hardware catches the request.

// ! ✅ Inside the server software:

// ! 🔄 The API layer (route handlers/endpoints) identifies what you want.

// ! ✅ The business logic decides what to do.

// ! ✅ The database is queried if data is needed.

// ! ✅ The server software packages the result (like JSON) and sends it back through the internet.

// ! ✅ Your browser receives the response and displays it.

//! The API layer’s main job is to route (navigate) requests to the right functions.
// ! The API handles requests by calling the corresponding function for that route and method.

// ! Different methods = different actions

// ! Each request method represents a different kind of action on the same data. For Example GET,POST, DELETE ETC

// ! The API layer in your Node.js app decides which function to execute based on method + endpoint.

// ! “The API handles requests by using corresponding functions, and depending on the type of request, it calls a specific function.”

// 🔥 That’s the essence of how APIs work inside server software like Node.js

// On a low level → an API is just a set of functions (routes with logic).

// ? Interface in general:

// The core idea of “interface” is always the same:

// It defines how two systems communicate

// In C++ we create interface using Abstract class, C++ does not have interface keyword
// we achieve this by using an abstract class that has only pure virtual functions.
// It defines the prototypes of methods but does not care about implementation, and they are implemented in some other class.”
// it define what functions must exist — leaving the how part to the derived classes.

// ! Back to API:

//! APIs have a bunch of “method prototypes,” but depending on the app’s business logic, we can implement them however we want.

// ✅ That’s precisely how an API works —
// and yes, that’s why it’s called an interface.

// ! So in a Nutshell:
// ✅ APIs are called interfaces because they define what actions (methods/endpoints) are available,
// while letting you implement how those actions work based on your business logic —
// exactly like OOP interfaces do inside a program.

// ! But!

// When you use a built-in API like fetch, you call someone else’s interface.
// When you design your own API in Node.js, you define that interface and decide what happens behind it.

// ! And:

// An interface isn’t about connecting machines — it’s about connecting code. How different parts of our program can communicate to each other

// ! API Data Formats:

// AJAX Stands For:

// Asynchronous JavaScript and XML

// XML is a data format which used to be widely used to transmit data on the web

// ! However these days no API uses XML data anymore

// The Term AJAX is Just an OLD name got very popular back in the day and so it is still used today

// Even though we don't use XML anymore

// ! So instead:
// ! Most APIs these days use JSON data format

// ! JSON is the most popular API data format

// ! Because it's basically just a JavaScript Object but Converted to a string

// And therefor its very easy to send data across the web and also to use in JavaScript Once the data is arrived
