// I paired with the awesome Grace Yim on this challenge.

// __________________________________________
// Write your code below.

//Pairing 5.27.14

//1.
var secretNumber=1;

//2.
var secretNumber=7;

//3.
var password="string";

//4.
password = "just open the door";

//5. 
var allowedIn = true;

//6. 
var allowedIn = false;

//7.
var members = [1, 2, 3];

//8.
members[0] = "John";

//9.
members.push("Mary");

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// I really enjoyed pairing with Grace on these exercises, because in working 
//with another person I felt like they were easier than I anticipated.  I 
//think having another person to bounce ideas on and share questions with made 
//me feel more confident while coding.  I still face problems remembering 
//syntax, but Grace and I were able to easily find solutions to any questions 
//we came across.  
// 

// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

