// 1: Basic Scope Chaining in Nested Functions

let globalVar = "I'm global";

function outerFunction() {
  let outerVar = "I'm in outer";
  
  function innerFunction() {
    let innerVar = "I'm in inner";
    console.log(innerVar); // Found in innerFunction's lexical environment
    console.log(outerVar); // Found in outerFunction's lexical environment
    console.log(globalVar); // Found in global lexical environment
  }
  
  innerFunction();
}

outerFunction();
// Output:
// I'm in inner
// I'm in outer
// I'm global


// 2: Scope Chaining with Shadowing

let name = "Alice";

function outerFunction() {
  let name = "Bob";
  
  function innerFunction() {
    console.log(name); // Found in outerFunction's lexical environment
  }
  
  innerFunction();
}

outerFunction();
// Output: Bob


// 3: Scope Chaining in Closures

function createGreeter() {
  let greeting = "Hello";
  
  return function greet(name) {
    console.log(`${greeting}, ${name}!`); // greeting from createGreeter, name from greet
  };
}

const greeter = createGreeter();
greeter("Alice");
greeter("Bob");
// Output:
// Hello, Alice!
// Hello, Bob!



// 4: Scope Chaining in Loops with var vs. let

console.log("With var:");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

console.log("With let:");
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output (after 1 second):
// With var:
// 3
// 3
// 3
// With let:
// 0
// 1
// 2



// 5: Scope Chaining with Missing Variables