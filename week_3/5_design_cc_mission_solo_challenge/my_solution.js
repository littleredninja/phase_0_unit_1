// This is a solo challenge

// Your mission description:

// Objects:
// A ogre
// A door
// A rotissere chicken

// Methods:
// fightOgre
// openDoor
// eatDinner

// Mission name:  Time to eat

// The knight will need to:

// fight an ogre
// open a door, 
// and eat some dinner.
// 

// Pseudocode
// 
// Create objects of ogre, door and chicken.

// Create method of fightOgre
// 	knight strikes ogre
// 	ogre dies

// Create method of openDoor
// 	knight opens door

// Create method of eatDinner
// 	knight eats chicken

// Initial Code

var ogre = true

var door = true

var chicken = true

var fightOgre = function() {
	if (ogre === true) {
		console.log("The ogre is dead!  Hooray!");
		ogre = false;
	}
	else {
		console.log("The ogre has already been defeated!  No need to be violent.");
	}
	
}

var openDoor = function() {
	if (ogre === true) {
		console.log("You can't open the door yet!  The ogre is still alive!");
	}
	else if (door === false) {
		console.log("The door's already open!  What do you want to do instead?");
	}
	else { 
		door = false;
		console.log("You've opened the door!  Good job!");
	}

}

var eatDinner = function() {
	if (door === true) {
		console.log("You can't eat yet, the door is still closed!")
	}
	else if (chicken === false) {
		console.log("You've already eaten dinner!  Don't be greedy.")
	}
	else {
		chicken = false;
		console.log("Mission accomplished!  Dinner is served!")
	}
}


// Refactored Code

var ogre = true

var door = true

var dinner = true

var fightOgre = function() {
	if (ogre === true) {
		console.log("The ogre is dead!  Hooray!");
		ogre = false;
	}
	else {
		console.log("The ogre has already been defeated!  No need to be violent.");
	}
}

var openDoor = function() {
	if (ogre === true) {
		console.log("You can't open the door yet!  The ogre is still alive!");
	}
	else if (door === false) {
		console.log("The door's already open!  What do you want to do instead?");
	}
	else { 
		door = false;
		console.log("You've opened the door!  Good job!");
	}
}

var eatDinner = function() {
	if (door === true) {
		console.log("You can't eat yet, the door is still closed!");
	}
	else if (dinner === false) {
		console.log("You've already eaten your chicken dinner!  Don't be greedy.");
	}
	else {
		dinner = false;
		console.log("Mission accomplished!  Chicken dinner is served!");
	}
}

// Reflection
// // 
// // I didn't really understand this assignment at first, because I couldn't picture 
// what a mission with methods and objects would look like.  I finally talked through 
// my idea with someone and realized how the game would work.

// I like the practice in writing methods this provided, and I found the articles on 
// refactoring interesting.  I can see the importance in making your code organized 
// and readable, and foreseeing places where alterations in the code could lead to 
// mistakes and bugs.  I'm looking forward to being more proficient in reading and 
// writing code, and eventually being proficient in "editing" code as well.  
//