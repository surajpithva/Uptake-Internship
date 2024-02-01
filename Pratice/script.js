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

// for of concept

const restaurant = {
  name: "suraj pithva",
  location: "28/B dayakakanagar",
  categories: ["kathiyavadi", "panjabi", "south indian"],
  starterMenu: ["focaccia", "garlic bread", "Caprese Salad"],
  mainMenu: ["Sev tameta", "paneer bhurji", "dosa"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },
  order: function (starterMenu, mainMenu) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu.entries()) console.log(item);
