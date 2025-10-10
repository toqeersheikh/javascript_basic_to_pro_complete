// ? What exactly is an iterable ?

// ! Anything that can be looped over using for of loop, spread operator or destructuring

//! Destructuring assignment is not a loop,

//! Destructuring assignment internally uses the iterable protocol (the same mechanism as for...of).
//! That’s why we can break down arrays, strings, sets, etc., into individual values using destructuring — because they are iterable.

//! The spread operator (...) also depends on the iterable protocol — meaning, yes, it runs a kind of loop behind the scenes to pull out values one by one.

// !Built-in Iterables

// !These are iterable by default:

//! Arrays
//! Strings
//! Sets
//! Maps
//! Typed Arrays (Int32Array, etc.)
//! The arguments object (in functions)
//! Some DOM collections (like NodeList)

//! ❌ Plain objects {} are not iterable by default.

//  **Iterable** = Anything that can be looped over with `for...of` (or spread syntax, etc.).
//    👉 Technically, an object is iterable if it has a method keyed by `[Symbol.iterator]`.

//  **[Symbol.iterator] method**

//    * Every iterable has this method.
//    * When you call it, it returns an **iterator object**.

//  **Iterator** = A special object with a `.next()` method.

//    * Each call to `.next()` returns **another object** of the form:

//  { value: <currentElement>, done: <true/false> }

//  **State tracking**

//    * The iterator internally remembers *where it is in the sequence (like an internal pointer/index).
//    * This state is hidden from you, but it updates every time `.next()` is called.

//  **Iteration process**

//    * Loops like `for...of` or spread (`...`) don’t manually call `.next()`.
//    * Instead, **under the hood**, they:

//      * Call `[Symbol.iterator]()` to get the iterator.
//      * Keep calling `.next()` until `{ done: true }`.

//    * Yes ✅ — every time you loop over an iterable, this is what happens invisibly.
//    * Normally, you don’t write `.next()` manually unless you’re learning or building custom iterators.
//    * In practice, you just need to **know what’s iterable and what isn’t**.

// Iterables are not “anything that can be looped” in *any* sense — specifically, they can be looped with `for...of`, `...`, destructuring, etc.
// * Iterators themselves don’t just *have* a “hidden property” — they encapsulate state internally (like an index pointer).

// !here’s the complete, connected story in the form of clean, note-style documentation

//! # Iterables & Iterators in JavaScript 🌀

// ### 1. **Iterable**

// * An **iterable** is any object that can be looped over with `for...of`, spread (`...`), or destructuring.
// * **Rule:** An object is iterable if it has a method with the key `[Symbol.iterator]`.
// * Examples of iterables:

//   * Arrays, Strings, Sets, Maps, Typed Arrays
// * Not iterable by default: Plain Objects (`{}`)

// ---

// ### 2. **[Symbol.iterator]**

// * A special built-in symbol that defines the iteration behavior.
// * Every iterable has this method.
// * When called, it returns an **iterator object**.

// ```js
// const arr = [10, 20];
// const iterator = arr[Symbol.iterator]();
// ```

// ---

// ### 3. **Iterator**

// * An **iterator** is an object that provides values one by one.
// * Must have a `.next()` method.
// * Each call to `.next()` returns an object with two properties:

//   ```js
//   { value: <element>, done: <true/false> }
//   ```
// * **value:** current element
// * **done:** whether iteration is finished

// ---

// ### 4. **How Iterators Work**

// * Iterators internally maintain a **hidden state** (like a pointer/index).
// * Each `.next()` call:

//   1. Reads the current element.
//   2. Advances the hidden state.
//   3. Returns `{ value, done }`.
// * When the sequence ends → `done: true`.

// ---

// ### 5. **Behind the Scenes of `for...of`**

// When you write:

// ```js
// for (const num of [10, 20, 30]) {
//   console.log(num);
// }
// ```

// Internally JavaScript does:

// 1. Calls `[Symbol.iterator]()` on the array → gets an iterator.
// 2. Calls `.next()` repeatedly.
// 3. Stops when `{ done: true }`.

// So `for...of` is just a friendly wrapper around iterators.

// ---

// ### 6. **Why It Matters**

// * You normally **don’t call `.next()` manually** in daily coding.
// * What you care about:

//   * Which things are iterable (Arrays, Strings, Sets, Maps, etc.).
//   * Which things are not (Plain Objects).
// * But knowing this mechanism explains how modern JS features (`for...of`, spread `...`, destructuring, generators) actually work.

// ---

// ✅ **One-line story:**
// An **iterable** is anything with a `[Symbol.iterator]` method → which returns an **iterator** object → whose `.next()` method gives `{ value, done }` → until `done: true`. All iterable-based loops in JS (like `for...of`) run on this exact mechanism under the hood.

//! 🔄 Traditional Loops vs Iterable-based Loops in JavaScript
//! 1. Traditional Loops

// Examples:

// for (let i = 0; i < arr.length; i++) { ... }

// while (...) { ... }

// do...while

// How they work:

// You control everything:

// The index/pointer (i)

// Start and stop conditions

// Step/increment logic

// They don’t care if the thing is iterable.

// They just need a numeric condition.

// ✅ Works with anything that has length/index (arrays, strings) or even custom counters.

//! 2. Iterable-based Loops

// Examples:

// for...of

// Spread syntax ...

// Array destructuring [a, b] = arr

// How they work:

// They rely on the Iterable Protocol.

// JavaScript automatically calls [Symbol.iterator]() on the object.

// Uses the returned iterator to get values with .next().

// You don’t deal with indexes directly — you just get values.

// ✅ Works with all built-in iterables (arrays, sets, maps, strings, typed arrays, etc.).
// ❌ Doesn’t work with plain objects unless you define your own iterator.

//? When to Use

//! Traditional loops:

// When you need indexes (i)

// When you want to skip/step in custom ways (i += 2)

// When looping conditions are not just "go through all items"

//! Iterable loops (for...of etc.):

// When you just care about values

// When working with Sets/Maps/Strings where indexes aren’t natural

// For cleaner, more readable iteration

// Traditional loops = manual driving 🚗 (you control everything).

// Iterable-based loops = autopilot ✈️ (engine handles iteration using [Symbol.iterator]).

//? ⚡ The Core Reason of why do iterable based loops exists

// Iterable-based loops exist because JavaScript needed one universal iteration mechanism that works for:

// Arrays ✅

// Sets ✅

// Maps ✅

// Strings ✅

// Generators ✅

// Even custom objects ✅

// Traditional loops could never unify all of these in one system.

// 👉 One-liner answer for memory:
// Iterable-based loops exist to give JavaScript a universal, protocol-driven way to loop over any collection — not just arrays — while hiding internal complexity.

//! The only way to say something is iterable in JavaScript is:

//! 👉 If it has a [Symbol.iterator] method that returns an iterator.

//! That’s literally the definition of an iterable.

//! 🔑 Summary Rule

//! Iterable = has [Symbol.iterator] function.

//! Arrays, Sets, Maps, Strings, Generators → all implement [Symbol.iterator] internally (built-in).

//! Plain objects → don’t, unless you add it yourself.
