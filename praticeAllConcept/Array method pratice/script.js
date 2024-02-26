const movements = [200, 450, 100, -1100, 950, -150, 489, -500];
// for (const [i, mov] of movements.entries()) {
//   if (mov > 0) {
//     console.log(`No ${i + 1}. you are deposite ${mov}`);
//   } else {
//     console.log(`No ${i + 1}. you are withdrew ${Math.abs(mov)}`);
//   }
//   //console.log(Math.abs(mov));
// }

/////////////////////////For Each method/////////////////////////////////

// movements.forEach(function (mov, i) {
//   if (mov > 0) {
//     console.log(`No ${i + 1}. you are deposite ${mov}`);
//   } else {
//     console.log(`No ${i + 1}. you are withdrew ${Math.abs(mov)}`);
//   }
// });

///////////////////////////////////////////////////////////////////////////////////

//////////////////////MAP WITH ARRAY///////////////////////////////////////////////

const currencies = new Map([
  ["USD", "united state doller"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, Map) {
  console.log(`this is the ${key} and its stands for  ${value}`);
});

//////////////////////SET WITH ARRAY////////////////////////////////////////////////////

// if we use set method then its only return original value not duplicate value

const currenciess = new Set(["suraj", "pithva", "parth", "pithva", "aamir"]);
console.log(currenciess);

currenciess.forEach(function (key, value) {
  console.log(`${key} : ${value}`);
});

//SORT THE ARRAYS(ASCENDING)
const movements1 = movements.sort((a, b) => a - b);
// const movements1 = movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

console.log(movements1);

//SORT THE ARRAYS(DESCENDING)
const movements2 = movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movements2);
