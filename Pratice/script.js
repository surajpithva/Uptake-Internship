// Destructuring Objects
// Mutating Variables
// let a = 11;
// let b = 22;
// const c = { a: 12, b: 23 };
// console.log(({ a, b } = c));

//Nested Objects (Objects inside objects)

// example of Spread Oprator

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const Newarr = [1, 2, ...arr];
// console.log(Newarr);

// const restaurant = {
//   name: "suraj pithva",
//   location: "28/B dayakakanagar",
//   categories: ["kathiyavadi", "panjabi", "south indian"],
//   starterMenu: ["focaccia", "garlic bread", "Caprese Salad"],
//   mainMenu: ["Sev tameta", "paneer bhurji", "dosa"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, //open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterMenu, mainMenu) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// console.log(restaurant.mainMenu);

// //copy arrays
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //rest

// const [a, b, ...other] = [1, 2, 3, 4, 5, 6];
// console.log(other);
// console.log(a, b, other);

// const [pizza, , risotto, ...otherfood] = [
//   ...restaurant.starterMenu,
//   restaurant.mainMenu,
// ];
// console.log(pizza, risotto, otherfood);

// // try with objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //try with functions

// const add = function (...number) {
//   sum = 0;
//   for (let i = 0; i < number.length; i++) sum = sum + number[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 8, 6, 9, 6);

// //
// console.log(3 || "suraj");
// console.log("" || "suraj");
// console.log(true || 0);
// console.log(undefined || null);

// const guest1 = restaurant.numGuests;

// // falsy value :- 0, null , undefined , Nan , empty string
// // Truthy values:- any number, any string, including empty strings,any object,any array ,true

// // nullish value is null or undefined(Not 0 or '')
// restaurant.numGuests = 0;
// const hello = restaurant.numGuests ?? 10;
// console.log(hello);

// (for of) concept

const weekDays = [
  "Monday",
  "Tuesday",
  "Wenenday",
  "Thurday",
  "Friday",
  "Saturday",
  "Sunday",
];
const openingHours = {
  [weekDays[0]]: {
    open: 12,
    close: 22,
  },
  [weekDays[1]]: {
    open: 11,
    close: 23,
  },
  [weekDays[2]]: {
    open: 0, //open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "suraj pithva",
  location: "28/B dayakakanagar",
  categories: ["kathiyavadi", "panjabi", "south indian"],
  starterMenu: ["focaccia", "garlic bread", "Caprese Salad"],
  mainMenu: ["Sev tameta", "paneer bhurji", "dosa"],
  openingHours,

  order: function (starterMenu, mainMenu) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// pratice of video no :- 11
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//for (const item of menu.entries()) console.log(`${item[0] + 1}:${item[1]}`);

//both answer are valid
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}

// 013 Optional Chaining
const Days = [
  "Monday",
  "Tuesday",
  "Wenenday",
  "Thurday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (const day of Days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`on ${day} we are open at ${open}`);
}

// console.log(restaurant.openingHours.Friday?.open);

// if the monday is exist time then print the time otherwise use Optional Chaining for cover the error and simply show undefined
// console.log(restaurant.openingHours.Monday?.open);

//  Optional Chaining for array

const bio = [
  {
    name: "suraj",
    age: 24,
    mail: "admin@.com",
  },
];

//we also create a if else condition to print this but use  Optional Chaining for code reduce

console.log(bio[0]?.age || "empty");

// if we want to object key then this is the example

for (const hello of Object.keys(openingHours)) {
  console.log(hello);
}

// its print the same value but in array

const properties = Object.keys(openingHours);
console.log(properties);

let openstr = `we are open on ${properties.length} days: `;
for (const day of properties) {
  openstr = openstr + `${day},`;
}
console.log(openstr);

// property values

const Values = Object.values(openingHours);
console.log(Values);

// loop for entire object
const Allthree = Object.entries(openingHours);
console.log(Allthree);

for (const [key, { open, close }] of Allthree) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}

// for (const hello of Object.values(openingHours)) {
//   console.log(hello);
// }
