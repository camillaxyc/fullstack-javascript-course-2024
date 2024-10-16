//Camilla (Xiao Ye) CHen
//Class 1 Exercise
//I used codepen to run the console.log and calculation

const medPizzaSize = 13;
const largePizzaSize = 17;
//area of circle is πr2
//1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.  What is the surface area for each of these pizzas?

const medPizzaArea = Math.pow(medPizzaSize / 2, 2) * Math.PI;
console.log("The 13inch med pizza area is " + medPizzaArea);

const largePizzaArea = Math.pow(largePizzaSize / 2, 2) * Math.PI;
console.log("The 17inch large pizza area is " + largePizzaArea);

//2. What is the cost per square inch of each pizza?

const medPizzaCostPerSqr = 16.99 / medPizzaArea;
const largePizzaCostPerSqr = 19.99 / largePizzaArea;

console.log(
  "The cost of the 13inch med pizza per square inch is " + medPizzaCostPerSqr
);
console.log(
  "The cost of the 17inch large pizza per square inch is " +
    largePizzaCostPerSqr
);

//3. Using the Math object, put together a code snippet that allows you to draw a random card
//with a value between 1 and 13 (assume ace is 1, jack is 11…)

const drawRandomCard = () => {
  return Math.floor(Math.random() * 13) + 1;
};

// 4. Draw 3 cards and use Math to determine the highest card
const card1 = drawRandomCard();
const card2 = drawRandomCard();
const card3 = drawRandomCard();

const highestCard = Math.max(card1, card2, card3);

console.log("the highest card is " + highestCard);

// 1. Create variables for firstName, lastName, streetAddress, city, state, and zipCode.
//Use this information to create a formatted address block that could be printed onto an envelope.

const firstName = "Cam";
const lastName = "Chen";
const streetAddress = "1234 Jackson Street";
const city = "Seattle";
const state = "WA";
const zipCode = "94002";

const address = `
${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zipCode}
`;
console.log(address);

// 2. You are given a string in this format:

//firstName lastName
//streetAddress
//city, state zip

//Write code that is able to extract the first name from this string into a variable.  Hint: use indexOf, slice, and / or substring

const addressExample = `firstName lastName
streetAddress
city state zip
`;

const firstNameExtacted = addressExample.slice(0, addressExample.indexOf(" "));
console.log(firstNameExtacted);

//Date
//On your own find the middle date(and time) between the following two dates:
//1/1/2020 00:00:00 and 4/1/2020 00:00:00

const startDate = new Date(2020, 0, 1);
const endDate = new Date(2020, 3, 1);

const middleTime = (startDate.getTime() + endDate.getTime()) / 2;

const middleDate = new Date(middleTime);
console.log(middleDate);
