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

// const weekDays = [
//   "Monday",
//   "Tuesday",
//   "Wenenday",
//   "Thurday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];
// const openingHours = {
//   [weekDays[0]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[1]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekDays[2]]: {
//     open: 0, //open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: "suraj pithva",
//   location: "28/B dayakakanagar",
//   categories: ["kathiyavadi", "panjabi", "south indian"],
//   starterMenu: ["focaccia", "garlic bread", "Caprese Salad"],
//   mainMenu: ["Sev tameta", "paneer bhurji", "dosa"],
//   openingHours,

//   order: function (starterMenu, mainMenu) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// // pratice of video no :- 11
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// //for (const item of menu.entries()) console.log(`${item[0] + 1}:${item[1]}`);

// //both answer are valid
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }

// // 013 Optional Chaining
// const Days = [
//   "Monday",
//   "Tuesday",
//   "Wenenday",
//   "Thurday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// for (const day of Days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`on ${day} we are open at ${open}`);
// }

// // console.log(restaurant.openingHours.Friday?.open);

// // if the monday is exist time then print the time otherwise use Optional Chaining for cover the error and simply show undefined
// // console.log(restaurant.openingHours.Monday?.open);

// //  Optional Chaining for array

// const bio = [
//   {
//     name: "suraj",
//     age: 24,
//     mail: "admin@.com",
//   },
// ];

// //we also create a if else condition to print this but use  Optional Chaining for code reduce

// console.log(bio[0]?.age || "empty");

// // if we want to object key then this is the example

// for (const hello of Object.keys(openingHours)) {
//   console.log(hello);
// }

// // its print the same value but in array

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openstr = `we are open on ${properties.length} days: `;
// for (const day of properties) {
//   openstr = openstr + `${day},`;
// }
// console.log(openstr);

// // property values

// const Values = Object.values(openingHours);
// console.log(Values);

// // loop for entire object
// const Allthree = Object.entries(openingHours);
// console.log(Allthree);

// for (const [key, { open, close }] of Allthree) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

// // for (const hello of Object.values(openingHours)) {
// //   console.log(hello);
// // }

// function addtwonum(num1, num2) {
//   const num = num1 + num2;
//   if (num % 2 == 0) {
//     return "even number";
//   } else {
//     return "odd number";
//   }
// }

// console.log(addtwonum(2, 1));

//document.getElementById("name").innerHTML += " " + addtwonum(2, 1);

// function insertdata() {
//   let num1 = document.getElementById("num1").value;
//   let num2 = document.getElementById("num2").value;
//   let ans = document.getElementById("ans");
//   //console.log(typeof num1);
//   num1 = Number(num1);
//   num2 = Number(num2);
//   // console.log(typeof num1);
//   // console.log(typeof num2);
//   const addnum = num1 + num2;
//   ans.setAttribute("value", addnum);
//   document.getElementById("name").innerHTML += " " + addnum;
//   //console.log(addnum);
// }
//document.getElementById("insertdata").innerHTML = insertdata();

// const insertdata = () => {
//   let num1 = document.getElementById("num1").value;
//   let num2 = document.getElementById("num2").value;
//   let ans = document.getElementById("ans");

//   //console.log(typeof num1);

//   num1 = Number(num1);
//   num2 = Number(num2);
//   // console.log(typeof num1);
//   // console.log(typeof num2);

//   const addnum = num1 + num2;
//   ans.setAttribute("value", addnum);
// };

////////////////////////////Maps Fundamentals///////////////////////////
// const rest = new Map();
// rest.set("name", "suraj pithva");
// rest.set(1, 28 / "B");
// console.log(rest.set(2, 28 / "c"));

// rest
//   .set("categories", ["Italian", "pizaaeria", "Vegetarian", "organic"])
//   .set("open", 1)
//   .set("close", 22)
//   .set(true, "we are open")
//   .set(false, "we are close");

// console.log(rest.get("name"));
// console.log(rest.get(false));
// console.log(rest.get("open"));
// console.log(rest.get("categories"));

// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));

// //this is not available in rest that why its thorew false otherwise its gives <true></true>
// console.log(rest.has("la"));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// //console.log(rest.clear);

// // important concept in maps
// const arr = [1, 3];
// rest.set(arr, "test");
// console.log(rest.get(arr));

// console.log(Object.entries(openingHours));

// //convert object to map

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// ///////////////////////////////////////
// // Maps: Iteration

// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct 🎉"],
//   [false, "Try again!"],
// ]);
// //console.log(question);

// // This is how possible to maps iteration

// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`answer ${key}: ${value}`);
// }

// //const answer = Number(prompt("what is your answer"));
// // console.log(answer);

// //console.log(question.get(question.get("correct") === answer));
// console.log(question);
// console.log([...question]);

// console.log([...question.keys()]);
// console.log([...question.values()]);
// console.log([...question.entries()]);

// Coding task
