//////////////////////////////for of methoddd use in this
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const dogsJulia1 = dogsJulia.slice(1, -2);
// //console.log(dogsJulia1);

// for (const [i, dogs] of [...dogsJulia1, ...dogsKate].entries()) {
//   if (dogs <= 3) {
//     console.log(
//       `dog number  ${i + 1}) is ${dogs}  years old and still a puppy `
//     );
//   } else {
//     console.log(`dog number  ${i + 1}) is ${dogs}  years old and an adult`);
//   }
// }

// function calcAverageHumanAge() {}

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);

  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/////////////////////////////////////////////////////////////////////////////////////

// data1 = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = data1.map((mov) => {
//   if (mov <= 2) {
//     const hello = console.log(` ${mov * mov}`);
//   } else {
//     const hello1 = console.log(`${16 + mov * 4} `);
//   }
// });

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
//1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4

// const calcAverageHumanAge = (dogsJulia) => {
//   const humanAge = dogsJulia.map((age) =>
//     age <= 2 ? 2 * age : (16 + age) * 4
//   );
//   // 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
//   const adults = humanAge.filter((age) => age >= 18);
//   console.log(adults);
//   // 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages

//   const avg = adults.reduce((acc, val) => acc + val, 0) / adults.length;
//   console.log(avg);

//   /////////////////we can also this
//   // const avg = adults.reduce((acc, val, i, arr) => acc + val / arr.length, 0);
//   // console.log(avg);
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : (16 + age) * 4))
    .filter((age) => age > 18)
    .reduce((acc, val, i, arr) => acc + val / arr.length, 0);
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// const adults = humanAge.filter((age) => age >= 18);
// console.log(adults);
// // 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages

// const avg = adults.reduce((acc, val) => acc + val, 0) / adults.length;
// console.log(avg);

/////////////////we can also this
// const avg = adults.reduce((acc, val, i, arr) => acc + val / arr.length, 0);
// console.log(avg);
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
