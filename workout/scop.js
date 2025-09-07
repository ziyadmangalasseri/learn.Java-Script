// 1: Global Scope vs. Function Scope

// let globalMessage = "Hello, World!"; // Global scope

// function sayHello() {
//   let localMessage = "Hi there!"; // Function scope
//   console.log(globalMessage); // Accessible: "Hello, World!"
//   console.log(localMessage); // Accessible: "Hi there!"
// }

// sayHello();
// console.log(globalMessage); // Accessible: "Hello, World!"
// console.log(localMessage); // Error: localMessage is not defined

// 2: Block Scope with let vs. var

// function testScope() {
//   if (true) {
//     var functionScoped = "I'm function-scoped!";
//     let blockScoped = "I'm block-scoped!";
//     console.log(functionScoped); // Works: "I'm function-scoped!"
//     console.log(blockScoped); // Works: "I'm block-scoped!"
//   }

//   console.log(functionScoped); // Works: "I'm function-scoped!"
//   console.log(blockScoped); // Error: blockScoped is not defined
// }

// testScope();


// 3: Nested Functions and Scope

// let appName = "MyApp"; // Global scope

// function outerFunction() {
//   let feature = "Dashboard"; // Outer function scope
  
//   function innerFunction() {
//     let action = "Click"; // Inner function scope
//     console.log(`${appName} has a ${feature} with ${action} action.`);
//   }
  
//   innerFunction(); // Works: "MyApp has a Dashboard with Click action."
//   console.log(feature); // Works: "Dashboard"
//   console.log(action); // Error: action is not defined
// }

// outerFunction();

// 4: Shadowing Variables in Scope

// let name = "Alice"; // Global scope

// function greet() {
//   let name = "Bob"; // Function scope, shadows global 'name'
//   console.log(`Hello, ${name}!`); // Uses local 'name': "Hello, Bob!"
// }

// greet();
// console.log(`Hello, ${name}!`); // Uses global 'name': "Hello, Alice!"


// 5: Common Scope Mistake in Loops

// Using var
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000); // Outputs: 3, 3, 3
// }

// // Using let
// for (let j = 0; j < 3; j++) {
//   setTimeout(() => console.log(j), 1000); // Outputs: 0, 1, 2
// }