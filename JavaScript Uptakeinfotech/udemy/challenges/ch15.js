const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const dogsJulia1 = dogsJulia.slice(1, -2);
console.log(dogsJulia1);

for (const dogs of [...dogsJulia1, ...dogsKate.entries()]) {
  if (dogs <= 3) {
    console.log(`Dog number is still a puppy,  ${dogs} years old`);
  } else {
    console.log(`Dog number is an adult, and is ${dogs}  years old`);
  }
}
