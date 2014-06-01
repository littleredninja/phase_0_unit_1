// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Igor Gaelzer
//  2. Jennie Chamberlin


// 0. "YOU SIGNED... WHO?!"


var adam = {
  name: "Adam Sandler",
  age: 47,
  quote: "That's your home! Are you too good for your home?!",
}
console.log("Client name: " + adam.name);

function Client(whattheycallme, age, quote, showQuote) {
    this.name= whattheycallme;
    this.age= age;
    this.quote = quote;
    }
}

var idina = new Client("Idina Menzel", 43, "Let it go")

// 1. "Here they Come!"

var adam = {
  name: "Adam Sandler",
  age: 47,
  quote: "That's your home! Are you too good for your home?!",
}

console.log("Client name: " + adam.name);
    
var kristen = {
  name: "Kristen Bell",
  age: 33,
  quote: "Do you wanna build a snowman?",
}

console.log("Client name: " + kristen.name);

var jim = {
  name: "Jim Carrey"
  age: 52
  quote:  "...So you're telling me there's a chance? YEAH!"
}

// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

function Client(whattheycallme, age, quote) {
    this.name= whattheycallme;
    this.age= age;
    this.quote = quote;
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");

shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 3. "SHOW 'EM OFF!"

var printClients = function(client) {
  var name = client.name;
  var age = client.age;
  var quote = client.quote;
  console.log("My client's name is " + name + ". "  + name + " is " + age + " and his favorite quote is '" + quote + "'");
};

printClients(shooterMcGavin)

// 4. "But wait, there's more!"

function Client(whattheycallme, age, quote) {
    this.name= whattheycallme;
    this.age= age;
    this.quote = quote;
    this.showQuote = function() {
      console.log(this.quote);
    }
}

shooterMcGavin.showQuote()


// 5.  ** BONUS **

// To add other client details, simply define properties for those clients:

shooterMcGavin.favoriteCake = "chocolate"


//  6.  Your Reflection:

// I found this pair problem to be overwhelming, and I was very aware of the sheer panic 
// that came when I realized that neither one of us knew where to begin.  I think
// I was surprised at how this nervousness clouded my ability to think through a 
// problem; at the same time I see again how infinitely faster I can come to a 
// working solution talking the problem through with someone else.  

// This pair was the first concrete practice I had with writing my own JavaScript, and I 
// learned a alot.  The practice from this challenge helped definitively with the other 
// challenges this week, especially how to make variables and functions.  
