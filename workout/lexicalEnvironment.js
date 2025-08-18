// function outer() {
//   let outerVar = "I'm from outer!";

//   function inner() {
//     let innerVar = "I'm from inner!";
//     console.log(outerVar); // Accesses outerVar from outer's lexical environment
//     console.log(innerVar); // Accesses innerVar from inner's lexical environment
//   }

//   inner();
// }

// outer();

// -------------------------------------------------------

// 1: Basic Lexical Environment in a Function

// let globalVar = "I'm global";

// function outerFunction() {
//   let outerVar = "I'm in outer";

//   function innerFunction() {
//     let innerVar = "I'm in inner";
//     console.log(innerVar); // Accesses innerFunction's lexical environment
//     console.log(outerVar); // Accesses outerFunction's lexical environment
//     console.log(globalVar); // Accesses global lexical environment
//   }

//   innerFunction();
// }

// outerFunction();
// // Output:
// // I'm in inner
// // I'm in outer
// // I'm global

// ---------------------------------

// 2: Lexical Environment in Block Scope

// let globalVar = "I'm global";

// function outerFunction() {
//   let outerVar = "I'm in outer";

//   function innerFunction() {
//     let innerVar = "I'm in inner";
//     console.log(innerVar); // Accesses innerFunction's lexical environment
//     console.log(outerVar); // Accesses outerFunction's lexical environment
//     console.log(globalVar); // Accesses global lexical environment
//   }

//   innerFunction();
// }

// outerFunction();
// Output:
// I'm in inner
// I'm in outer
// I'm global


