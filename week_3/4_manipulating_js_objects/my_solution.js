
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below.

var adam = {
  name: "Adam"
};

terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;

adam.spouse = terah;

terah.children = {};

terah.children.carson = {
  name: "Carson"
};

terah.children.carter = {
  name: "Carter"
};

terah.children.colton = {
  name: "Colton"
};

adam.children = terah.children;

//or

terah.children.carson = {}

terah.children.carson.name = "Carson";

terah.children.carter = {};

terah.children.carter.name = "Carter";

terah.children.colton = {};

terah.children.colton.name = "Colton";

adam.children = terah.children;


// __________________________________________
// Reflection: Use the reflection guidelines
// 
// I'm learning alot about the way I learn new things, and one things
// that frustrates me immensely is not understanding the new vocabulary
// we're learning.  I spent a good bit of time on a problem because I 
// didn't understand the question or what it was asking for.  Also I see
// that I can understand the basics of a question, but when the problem 
// requires me to apply some sort of variation, I like to look for examples 
// or a model to work from. This can prove frustrating because I don't know how 
// to look for these examples - I end up googling for a while but can 
// never seem to find something that fits.  I value having someone to help
// in these instances, because once I see an example I am usually able to
// apply it to my own solution.

// Between learning the basics in Ruby and Javascript, I prefer Ruby 
// because of it's readability, but I see how once I am more proficient
// in either that it's easy to translate skills learned in one language
// to another.  I also see that working with computer languages takes 
// a shift in how one communicates, but it is not an easy transition from
// learning a speaking language.  The thinking patterns and skills are 
// different to me;  learning a speaking language is fairly fluid
// and flexible, while computer languages are not and small mistakes do not 
// explain themselves away.  During this challenge I made a lot of little 
// mistakes that took a good bit of time to figure out, and at the end
// I still can't figure out what it was that I did wrong initially.
// Hopefully with some time I can get accustomed to reading code, and 
// watching for those little things that cost so much time and ulitmately
// energy.  
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)