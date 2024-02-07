const airline = "Tap Air India";
console.log(airline.length);
console.log("Plane".length);
console.log("Plane"[0]);
console.log(airline.indexOf("a"));

// identify last a
console.log(airline.lastIndexOf("a"));

//start from index no 4
console.log(airline.slice(4));

//end value is not includ
console.log(airline.slice(4, 7));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(typeof new String("suraj"));

console.log(typeof new String("suraj").slice(0));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// if some user put their name not in format like Suraj and sUraJ like that

const user = "MaKsHad BhaI";
const Newuser = user.toLowerCase();
//console.log(Newuser);
const olduser = Newuser[0].toUpperCase() + Newuser.slice(1);
console.log(olduser);

//compare email
const email = "hello@jonas.io";
const loginEmail = "  HELLO@JONAS.IO \n";
const loweremail = loginEmail.toLowerCase();
console.log(loweremail.trim());

const normalizedemail = email.toLowerCase().trim();
console.log(normalizedemail);

//replce method like
const priceIN = "288,8$";
const priceUS = priceIN.replace("$", "%").replace(",", ".");
console.log(priceUS);

const announce = "All the student are ready for exam . you are good student";

//replce only replce first element and replceall replce all elemnts
console.log(announce.replace("are", "is"));
console.log(announce.replaceAll("are", "is"));

// pratice for include startwith or endwith just cheak for the variable store this or not

const cheakBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed in our country");
  } else {
    console.log("you are welcome");
  }
};
cheakBaggage("i have laptop or mobile or waterbottle");
cheakBaggage("i have gun or something books");
cheakBaggage("i have Knife ");

// Split method
console.log("hello+how+are+you".split("+"));

const [firstname, lastname] = "suraj pithva ".split(" ");
//console.log(lastname);
const newname = ["mr.", firstname, lastname.toUpperCase()].join(" ");
console.log(newname);

// UDF use of join,slice & split

const capitalizeName = function (name) {
  const names = name.split(" ");
  //console.log(names);
  const nameUpper = [];
  for (const n of names) {
    nameUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(nameUpper.join(" "));
};
capitalizeName("hello how are you all");
capitalizeName("my self suraj pithva");

//padding
const message = "go to the hell";
console.log(message.padStart(14, "+").padEnd(35, "+"));

const maskCreditcard = function (numer) {
  const str = numer + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditcard(123456799));
console.log(maskCreditcard("451546412313515"));

//repeat
const message1 = "suraj and maksad bhai join at uptake infotake \n";
console.log(message1.repeat(5));

const planeinline = function (n) {
  console.log(`there is ${n} planes in line${"✈️".repeat(n)}`);
};
planeinline(5);
planeinline(50);
planeinline(15);
