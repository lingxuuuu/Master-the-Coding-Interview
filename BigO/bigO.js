
//Big O Exercise 1
function funChallenge(input) {
    let a = 10; //o(1)
    a = 50 + 3; //o(1)
  
    for (let i = 0; i < input.length; i++) { //o(n)
      anotherFunction(); //o(n)
      let stranger = true; //o(n)
      a++; //o(n)
    }
    return a; //o(1)
  }

  //we are running 1+1+1+4n = 3+4n times. BIG O(3+4n)
  //Big O(n)

  //Big O Exercise 2
  function anotherFunChallenge(input) {
    let a = 5; //o(1)
    let b = 10; //o(1)
    let c = 50; //o(1)
    for (let i = 0; i < input; i++) { //o(n)
      let x = i + 1; //o(n)
      let y = i + 2; //o(n)
      let z = i + 3; //o(n)
  
    }
    for (let j = 0; j < input; j++) { //o(n)
      let p = j * 2; //o(n)
      let q = j * 2; //o(n)
    }
    let whoAmI = "I don't know"; //o(1)
  }
  //the function runs Big 0(n) 

// #Big O Cheat Sheet:

// -Big Os
// O(1) Constant- no loops
// O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
// O(n) Linear- for loops, while loops through n items
// O(n log(n)) Log Liniear- usually sorting operations
// O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops
// O(2^n) Exponential- recursive algorithms that solves a problem of size N
// O(n!) Factorial- you are adding a loop for every element

// Iterating through half a collection is still O(n)
// Two separate collections: O(a * b)

// -What can cause time in a function?-
// Operations (+, -, *, /)
// Comparisons (<, >, ==)
// Looping (for, while)
// Outside Function call (function())

// -Rule Book
// Rule 1: Always worst Case
// Rule 2: Remove Constants
// Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a*b)
// + for steps in order
// * for nested steps
// Rule 4: Drop Non-dominant terms

// -What causes Space complexity?-
// Variables
// Data Structures
// Function Call
// Allocations