
// write a program this bill and without if else condition
const bill = 500;
const tip = bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.2;
console.log(`“The bill was ${bill}, the tip was ${tip}, and the total value 
${bill + tip}”`);


