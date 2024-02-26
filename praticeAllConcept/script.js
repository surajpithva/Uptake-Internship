//"use stict";

// const bookings = [];

// const creatBooking = function (
//   flightNum,
//   numPassengers,
//   price = 199 * numPassengers
// ) {
//   const booking = { flightNum, numPassengers, price };

//   console.log(booking);
//   bookings.push(booking);
// };
// creatBooking("LH123", 200);
// creatBooking("LH23");

// const flight = "HG123";
// const suraj = {
//   name: "suraj pithva",
//   passport: 145263789,
// };

// const cheakIn = function (flightNum, passenger) {
//   flightNum = "LH125";
//   passenger.name = "mr." + passenger.name;
//   if (passenger.passport === 145263789) {
//     alert("Cheaked In");
//   } else {
//     alert("Wrong flight");
//   }
// };
// // cheakIn(flight, suraj);
// // console.log(suraj);
// // console.log(flight);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };
// newPassport(suraj);
// cheakIn(flight, suraj);

/////////////////////////////// FUNCATIONs RETURN FUNCTIONS/////////////////////////////////////

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeter = greet("hello");
// greeter("jonas");
// greeter("sruaj");

// greet("hello")("suraj");

// const greet = (greeting) => {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeter = greet("hello");

// greeter("suraj");
// greet("hello")("suraj");

/////////////////////////////////////////USE ARROW FUNCTION
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greet("hello")("motto");

//////// the call and apply functions

// const indiaAir = {
//   airLine: 123,
//   itaitCode: "FL",
//   airLineName: "INDIGO",
//   bookings: [],
//   book(flightName, name) {
//     console.log(
//       `${name} booked name on ${this.airLine} flight ${this.itaitCode}${this.airLineName}`
//     );
//   },
// };
// indiaAir.book(239, "BYPAKISTAN");

////////////////////Bind method with Event Listeners
// indiaAir.plans = 300;
// indiaAir.buyplane = function () {
//   console.log(this);
//   this.plans++;
//   console.log(this.plans);
// };
// document
//   .querySelector(".buy")
//   .addEventListener("click", luftana.buyplane.bind(indiaAir));

//partial function
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(10, 20));

// const addVat = addTax.bind(null, 3);

// console.log(addVat(10));

//////////////functions into functions

// const addTax = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVat = addTax(10);
// console.log(addVat(2));

/////////////////////////////////////////// [ Immediately Invoked Function Expressions ] /////////////////////////////////////////////

// (function () {
//   console.log("this is how run Immediately Invoked Function Expressions ");
// })();

// (() =>
//   console.log("this is how run Immediately Invoked Function Expressions"))();

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};
const booker = secureBooking();
booker();
booker();
// secureBooking();
