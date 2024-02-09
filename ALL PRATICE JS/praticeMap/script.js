//use of map method with arrow function
const movements = [200, 10, 48, -150, -50, -90, -10, 100, 450];

//////////////////////////print max value use of reduce

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(largest);

const eurtoUSD = 1.1;

const movementsUSD = movements.map((mov) => mov * eurtoUSD);
console.log(movements);
console.log(movementsUSD);

//use for of method

const movementsUSDfor = [];

for (const mov of movements) {
  movementsUSDfor.push(mov * eurtoUSD);
}
console.log(movementsUSDfor);

//////////////////////////////////////////////filter method use////////////////////////////////////////

const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

/////////////////////////MINUS VALUE THROW filteer
const withdrawal = movements.filter((mov) => mov < 0);
console.log(withdrawal);

///////////////////////////////////////////////filter method
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

//////////////////////////////REDUCE METHOD USE

const balance = movements.reduce((acc, cur, index, arr) => {
  console.log(`this is the ${index + 1}: and ${cur}`);
  return acc + cur;
}, 0);

//////////////////////////// this is same code but use arrow function
const balanceCopy = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balanceCopy);

/////////////////////////////////this work also we can done with for loop

let balance2 = 0;
for (const mov of movements) balance2 = balance2 + mov;

console.log(balance2);
