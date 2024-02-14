const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

dogs.forEach(
  (element) => (element.recommended = Math.trunc(element.weight ** 0.75 * 28))
);

// Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose)

const sarahDog = dogs.find((dogs) => dogs.owners.includes("Sarah"));
console.log(sarahDog);
console.log(
  `the sarah dog is eat  ${
    sarahDog.curFood > sarahDog.recommended ? "much" : "little"
  }`
);

// Create an array containing all owners of dogs who eat too much  ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommended)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommended)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

// Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(" and ")} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")} dogs eat too little!`);

// Log to the console whether there is any dog eating exactly the amount of food  that is recommended (just true or false)

//const eatingDogSame = (dogs.curFood = dogs.recommended ? "true" : "false");
console.log(dogs.some((dog) => dog.curFood === dog.recommended));

// Log to the console whether there is any dog eating an okay amount of food (just true or false)

console.log(
  dogs.some(
    (dog) =>
      dog.curFood > dog.recommended * 0.9 && dog.curFood < dog.recommended * 1.1
  )
);

//
// Create an array containing the dogs that are eating an okay amount of food. (try to reuse the condition used in 6.
const containDogsEating = dogs.filter(
  (dog) =>
    dog.curFood > dog.recommended * 0.9 && dog.curFood < dog.recommended * 1.1
);
console.log(...containDogsEating);
// Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects

console.log(dogs);
const shallowCopy = dogs.slice().sort((a, b) => a.recommended - b.recommended);
console.log(shallowCopy);
