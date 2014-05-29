// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 //1.  Rescue Mission
 // Move down x2
 // Move right 
 // Move up x2
 // Move right x2
 // Move down x2 
 // Attack the enemy

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.moveDown();
this.attackNearbyEnemy();

// 2.  Grab the Mushroom

// Move up
// Move right
// Move left
// Move up
// Attack the enemy

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();
 
// 3.  Drink Me

// Move right
// Attack the enemy
// Move right
// Move down
// Move up
// Move right
// Attack the enemy
// Move right

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();

// 4.  Taunt the Guards   
 
// Move right
// Yell at the enemy
// Move left
// Move left
// Yell "Attack!"
// Move right
// Say "Follow me!"
// Move right 
// Move right
// Move up
// Move right
// Say "Something!"
// Move down
// Move right
// Move up
// Move right

this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Something!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// 5.  It's a trap

// Move down
// Move down
// Yell at the enemy
// Move up
// Move up

this.moveDown();
this.moveDown();
this.say("Hey, you big bully!");
this.moveUp();
this.moveUp();

 // 6.  Break the Prison
 // Check for each prisioner's name
 // If the prisioner is a friend, return true
 // If the prisioner is an enemy, return false
 // Move Right to escape

if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if(name === "Lucas")
    return true;
if (name === "Brack")
    return false;
if(name === "Marcus") 
    return true;
if(name === "MARCUS")
    return false;
if(name === "Gordon")  
    return true;
this.moveRight();

// 7.  Taunt

// Yell at the ogre 4 times

this.say("Hey dum dum!");
this.say("You are stupid!");
this.say("I don't like you!");
this.say("Nanny nanny boo boo!");

// 8.  Cowardly Taunt

// Move into the middle of the field
// Yell at the ogres
// Run behind the towers

this.moveXY(53,36);
this.say("Hey dum ogres!");
this.moveXY(70,11);

// 9.  Commanding Followers

// Direct the soliders to Follow
// Lead them to the ogres
// Command them to attack
// Watch from the sidelines

this.say("Follow me!");
this.moveXY( 62, 43);
this.say("Attack the ogres!");
this.moveXY(67, 34);
 
// 10.  Mobile Artillery

// Move into range of ogres
// Shoot twice
// Move into range of other ogres
// Shoot twice

this.moveXY(52,41);
this.attackXY(50, 67);
this.attackXY(50, 53);
this.moveXY(59, 29);
this.attackXY(67, 55);
this.attackXY(61, 43);


// Reflection:
// Write your reflection here.

// Though simplistic, I thought this was a fun way to get acclimated
// to JS syntax.  With the simple functions and arguments, I feel 
// the game was a good introduction to how JS works in practice. 

// I'm not used to the idea of pseudocoding everything, but I can 
// see how it helps keep one organized, much like prewriting when you're
// organizing a paper.  I found it a little tedious, but I can see how it
// helps.  











