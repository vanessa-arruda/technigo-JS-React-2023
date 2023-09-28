/*
1) (This has a DEMO solution.)
Create a variable that stores the name of your cafe.
Print out a greeting such as "Welcome to Technigo Cafe! What would you like to order today?"
Where Technigo Cafe is replaced by the name of your cafe that is stored in the variable.
*/

const cafeName = "Cherry Cafe";
console.log(`Welcome to ${cafeName}! What would you like to order today?`);

/*
2)
Create a variable that stores the price of a coffee.
*/

let coffeePrice = 2;
/*
Create a variable that stores how many coffees the customer wants.*/

const coffeeAmount = prompt("How many cups of coffee do you want? type a number");

/* Print out the total price such as "There you go, that'll be 10 euros"
Where 10 is replaced by the calculation of the total price.
*/

const coffeeTotal = coffeePrice * coffeeAmount;
console.log(`There you go, that'll be ${coffeeTotal} euros. Thank you!`);

// Good practice Approach

coffeePrice = 335; 
// Aparently super expensive coffee!

const numberOfCoffees = 10;

let totalPrice = coffeePrice * numberOfCoffees;
let message = `There you go, that'll be ${totalPrice} KR`;
console.log(message);

// Bad practice Approach

let myStatment = `There you go, that'll be ${coffeePrice * numberOfCoffees} KR`;
console.log(myStatment);

/*
3)
Create a variable that stores a boolean.
Print out "You said this coffee is the best, that was actually true"
Where true is replaced by your varible
*/

const costumerLike = true;
console.log(`You said this coffee is the best, that was actually ${costumerLike}`);
/*
4)
Create a variable called cafeGuests, that shows us how many cafeGuests we have.
Assign it a value.
Print it out.
assign it a new value.
Print it out. => This should give you the new value.
*/
let cafeGuests = 39;
console.log(`Amount of Guests in the Cafe now is: ${cafeGuests}`);

cafeGuests = 10;
console.log(cafeGuests);
cafeGuests = false;
console.log(cafeGuests);
cafeGuests = ["I", "love", "Hip Hop"];
console.log(cafeGuests);

cafeGuests = 45;
console.log(`Amount of Guests in the Cafe now is: ${cafeGuests}`);
/*

5)
Create a variable called maxGuests, that shows us how many guests are allowed in the cafe.
Assign it a value.
Print it out.
assign it a new value.
Print it out. => This should give you an error because it shouldn't be able to be changed.
*/
let maxGuests = 50;
console.log(`Amount of Guests in the Cafe now is: ${maxGuests}`);

/*maxGuests = 30;
console.log(`Amount of Guests in the Cafe now is: ${maxGuests}`)*/

maxGuests = 10;
console.log(maxGuests);
//maxGuests = "I also love rock n roll!";

/*
6)
Create a variable that stores a string.
Print out that string in only UPPERCASE letters.
*/
let str = "TeAm CheRRy";
const upperStr = str.toUpperCase();
console.log(upperStr);

/*
7)
Print out the same string in only lowercase letters.
*/
const lowerStr = str.toLowerCase();
console.log(lowerStr);
/*
8) **BONUS**
Print out the string "Today we have a special summer deal!". 
Then figure out a way to replace the word "summer" in the string with the word "winter"
Should give you => "Today we have a special winter deal!"
(check for a specific string method...)
*/

let specialDeal = "Today we have a special summer deal!";
let updatedDeal = specialDeal.replace("summer", "winter");
console.log(updatedDeal);
let season = "summer";
newText = season.replace("summer", "winter");

console.log(`Today we have a special ${newText} deal!`);
