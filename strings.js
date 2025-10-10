"use strict";

// lets assume an example of an airline in order to demonstrate strings

const airline = "Fly Emirates";

const plane = "F320";

// Just Like Arrays, Strings also have indexes:
// And it starts from 0
// And using indexes we can get any character of string

console.log(plane[0]);

console.log(airline[4]);

// So just like an array we can get the character of string at a certain position

// and same of course for any letter:

console.log(plane[1]);

// but the characters that are retrieved are still strings
// And we can do the same on string directly

console.log("Haji"[0]);

// Reading Length of String:

console.log("haji".length);
console.log(plane.length);
console.log(airline.length);

// ============

// String Methods:

// Strings also have methods and some of them are very similar to arrays

// IndexOf():
// used to get the position in which a certain letter is in the string

console.log("haji".indexOf("j"));
console.log(airline.indexOf("E"));

// Strings are also 0 based
// And of-course the space here also count as character

// Now it gives us the index of first occurrence

// But sometime we might need the last one so for that we have:

// lastIndexOf()

console.log(airline.lastIndexOf("e"));
console.log("haji newton".indexOf("n"));
console.log("haji newton".lastIndexOf("n"));

// So thats the difference

// And we can also search for an entire word

console.log(airline.indexOf("Emirates"));
// this one is actually case sensitive
console.log(airline.indexOf("emirates"));
// if case does not matches it return -1
// because this can now not be found in the airline string

//? Where do we use the indexes?

// !To extract some part of a string

// using slice()

// The slice method needs indexes as arguments

// Arguments of Slice():

// Start Index
// End Index
airline;
plane;

console.log(airline.indexOf("E"));
// Again its case sensitive
console.log(airline.slice(4));
// So it starts extracting from Index of E thats what figured out above

// ! And the result we got here is called substring
// because its just a part of string

// here we only passed the begin parameter
// so it extracted everything all the way out

// Now this does not change the original string
airline;

// And it is because its impossible to mutate strings as they are primitives

//! And the slice() return the extracted substring
// And so we can store it in a variable
const stadium = "Qaddafi Cricket Stadium Lahore";

// And beside the begin parameter we also have the end parameter

// End parameter: Index Number

const st = stadium.slice(stadium.indexOf("Cricket"), stadium.lastIndexOf(" "));
st;

//! So basically it stops extracting before reaching the end parameter index

// So this is how we make use of indexes

airline;

// the length of the string will always be end parameter minus start
console.log(airline.indexOf("E"));
console.log(airline.slice(4, 7));
console.log(airline.slice(4, 7).length);
// 7 - 4 = 3

// So:
// indexOf()
// lastIndexOf()
// are very useful

// of-course we can hard code these values but sometime we don't know these indexes

// So let say we want to extract the first word out of a string

stadium;

const first = stadium.slice(0, stadium.indexOf(" ")); // 0 to 1st space occurrence
first;
// so we got it with begin param 0 and end to first space index

// lets extract "Lahore";

const lhr = stadium.slice(stadium.indexOf("L"));
const lhr2 = stadium.slice(stadium.lastIndexOf(" ") + 1); //added one to remove index of space
lhr;
lhr2;
// we can do it both ways

// So thats fundamentals of slice

// But we can do even more with it:

// We can even define a negative begin parameter

airline;
stadium;
lhr;
first;

console.log(first.slice(-2));
// by passing negative begin parameter it will start counting indexes from end and extract it

// we can also specify a negative end parameter

console.log(airline.slice(airline.indexOf(" "), -2));
// So starting from 1st space to the end, and it will skip last 2 elements from the end

// Now lets do some practice with real world looking examples:

// Lets create a function that receives a string : seat number and logs if it is middle seat or not

// Let suppose if it contains B or E then it is a middle seat

// So basically all we want to do it check if the received string contains B or E

const isMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got middle seat");
  } else {
    console.log("You got luck man :)");
  }
};

isMiddleSeat("11B");
isMiddleSeat("21E");
isMiddleSeat("12C");

// But why all of this work?

// So we know strings are just primitives

// Then how do they got methods

// Because we know methods only belongs to objects

// Well that is actually true

//! However JavaScript is really smart

//! Primitives are not objects, so technically they shouldn’t have methods.

//! However, JavaScript does something smart under the hood — it temporarily wraps the primitive in a special object called a wrapper object.

// ? So this is how it works:

//? Whenever we call a method on a string JavaScript will automatically behind the scenes convert that string primitive to string Object with the same content and then its on that object where the methods are called.

//! And this process is called Boxing

// Because it basically takes our string and puts it into a box which is the object

// And basically JavaScript calls the String Constructor

console.log(typeof new String("haji"));

// So this is the conversion that JavaScript does behind the scenes whenever we call a method on string

//! And then, when the operation is done, the object is converted back to regular string

// ! And In fact all the string methods return a primitive even if they are called on a string object

lhr;
lhr2;
first;
console.log(typeof lhr);
console.log(typeof lhr2);
console.log(typeof first);

// ========

// Lets Continue with some more string methods

// toLowerCase();
console.log("HAJI".toLocaleLowerCase());
// toUpperCase();
console.log("haji".toLocaleUpperCase());

// And these methods require no arguments

// fix capitalization in a name
const passenger = "haJI";
const passengerLower = passenger.toLocaleLowerCase();
passengerLower;
const fixed = passengerLower[0].toUpperCase() + passengerLower.slice(1);
fixed;

// can create a function for this purpose

const capitalize = function (pName) {
  const lower = pName.toLowerCase();
  return lower[0].toLocaleUpperCase() + lower.slice(1);
};

console.log(capitalize("jon"));
console.log(capitalize("jOn"));
console.log(capitalize("riCky"));

// Lets create a function to check user input email:

const email = "hello@toqir.io";

// but now as the user logs in accidentally they do it all wrong

const loginEmail = "Hello@Toqir.io";

// but still this email here is kind of correct and valid And so we can now still compare if these two are same

//! Now when we check the user input:

// Steps :

// convert everything to lowerCase:

const lowerEmail = loginEmail.toLocaleLowerCase();

// get rid of all the white spaces, so
// empty spaces
// also the enter button pressed, that is also counted as a space

// And to remove white spaces we use trim()

const trimmedEmail = lowerEmail.trim();

trimmedEmail;
loginEmail;
email;

// so now we can compare trimmed email and user's real email

console.log(email === trimmedEmail);

// and we can even do it in a better way

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
normalizedEmail;

// thats so cool
// so we chained multiple methods together in order to implement it
// and now again we can compare it

console.log(email === normalizedEmail);

// And Since ES 2019 there are also:

// trimStart()
// trimEnd()

// next up lets learn about one of the most important things about strings
// which is to replace parts of strings

// So let say
// const priceGB = "288,97€";

const priceGB = "288,97£";
// flight price for Great Britain

// ! In Europe comma (,) is used as decimal separator
// ! In US period (.) is used as decimal separator

// Now we want to compute the price ein USD

// For that we need to replace the £ with $ and comma with period

// For that we have

//! replace(x,y)

// x : value that we want to replace
// y : string that will replace the first one
// returns: a new string
const priceUSD = priceGB.replace("£", "$").replace(",", ".");
priceUSD;

// thats soo cool indeed

// And we can also replace the entire words not just single characters

// Let say

const announcement = "All passengers please come to the boarding door 23";

// However usually it is called gate not door

// So lets create

console.log(announcement.replace("door", "gate"));

// So this replace only replace the first occurrence

const announcement2 =
  "All passengers please come to the boarding door 23. Please make sure you are at the door before 5 minutes of take of";

console.log(announcement2.replace("door", "gate"));

// And the solution to this is replaceAll()

console.log(announcement2.replaceAll("door", "gate"));

// ! replace method is also case sensitive

// There are also 3 methods that return booleans:

//includes()

plane;
console.log(plane.includes("F3"));
console.log(plane.includes("a"));
console.log(plane.includes("f"));
console.log(plane.includes("F"));

// this is also case sensitive

// startsWith()

airline;
plane;
email;

console.log(plane.startsWith("f"));
console.log(plane.startsWith("F"));
console.log(email.startsWith("hel"));
console.log(email.startsWith("H"));

// endsWith();

console.log(email.endsWith(".io"));
console.log(plane.endsWith("0"));

// split();

// allows to split a string with multiple parts based on a divider string
// returns an array

console.log("haji".split("")); //divider: empty string

console.log("A+very+nice+day".split("+")); //divider: +
console.log("A+very+nice+day".split(""));

// lets make a good use of it:

const haji = "Haji Jones";

console.log(haji.split(" "));
const [firstName, lastName] = haji.split(" ");
firstName;
lastName;

// Join();
// Opposite of split
// joins elements of an array to string

console.log([1, 2, 3, 4, 5].join(""));
console.log([1, 2, 3, 4, 5].join(" "));
console.log([1, 2, 3, 4, 5].join("-"));

console.log("haji".split(""));

// ! Split is a string method and Join is an Array method

// repeat();
// allows us to repeat the string multiple times
// accepts a number as an argument
// that decides how many time it will be repeated

console.log(" haji".repeat(5));

// ! And there are many more string methods of-course, may refer to MDN Web DOCS
