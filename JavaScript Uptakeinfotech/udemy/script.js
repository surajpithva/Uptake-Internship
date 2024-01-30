"use strict";
// let js = "amazing";
// if (js ==="amazing") alert("javascript is fun")

// console.log(40+100-50);

// typeof in javascript
//string
// let a = "javascript";
// console.log(typeof a)

//boolean
// let javascript = true;
// console.log( typeof javascript)

//number

// year = 2024
// console.log( typeof year)

//undefined

//  javascript = 'yes!'
//  console.log(typeof yes)

//null
//  console.log(typeof null)

//  3 way to declare variable
// let const var
// when  we use let keyword we can value change any time
// let age = 31;
// console.log(age)

// age = 30;
// console.log(age)

// const
//when we use const keyword to declare a variable we can not change value
// its shows us to error
// const age =  32;
// console.log(age)

// age = 30;
// console.log(age)

// const also similar to let

//chanllage 1
// const massMark = 78;
// const heightMArk = 1.96;
// const massJohn = 92;
// const heightjohn = 1.95;

// const BMImark = massMark / heightMArk ** 2;
// const BMIjohn = massJohn / (heightjohn * heightjohn);

//cheak the condition
// markHigher = BMImark > BMIjohn;

// console.log(BMImark , BMIjohn);

// concat method

// const firstname = "suraj";
// const job = "coder";
// const BirthYear = 2002;
// const CurrentYear = 2024

// const method = "i'm " + firstname + " , a " + (CurrentYear - BirthYear) + " year old " + job + " ! "
// console.log(method);

//how concat this without using + sign
// if we don't use + sign to concat then use `write code between this  ` and doller sign and {} use

// const methodnew = `i'm  ${firstname} , a  ${CurrentYear - BirthYear} year old ${job} `
// console.log(methodnew);

// if else condition

// const agenew = 10;
// if ( agenew >= 18 ) {
//     console.log(`suraj you can drive`)
// } else {
//     const yearsleft = 18 - agenew;
//     console.log(`suraj is too young you have ${yearsleft} years left` );
// }

// if change  data type string into number then write like
// const newcol = '2022';
// console.log(Number(newcol) + 10 );

// console.log(2 + "3" + 1 - "1")

// what is differnce between =,==,===
// if we want to declare any value then use =
// if use any comprision between two values then use
// if we want to compare two values with data types then use ===   (video no:- 20)

// logical operator in javascript 1. AND && , OR || , NOT !
// exmaple

// const hasDriverLicense = true
// const goodVision = false
// console.log(hasDriverLicense && goodVision); //even one condition is false then output is false
// console.log(hasDriverLicense || goodVision) // any one condition is true then output is true
// console.log(!hasDriverLicense); //give us opposite output

// const isTried = true
// if(hasDriverLicense && goodVision){
//     console.log('suraj is able to drive')
// }else{
//     console.log('suraj is  not able to drive')
// }

//above output is going in else part beacuse there is one condition is false which is good vision .... ( video no:- 22)

// const Dolphins = 96 + 108 + 89 / 3;
// const Koalas = 96 + 108 + 89 / 3;

// console.log(Dolphins,Koalas)
// if(Dolphins > Koalas){
//     console.log(`Dolphins score is Highest then Koalas `)
// }else if(Dolphins == Koalas){
//     console.log(` same score of both team  then match is draw`)
// }
// else{
//     console.log(`Koalas score is Highest comapre to Dolphins`)
// }

// const day = prompt(`enter the day : `);

// if(day === 'monday'){
//     console.log("plan for this week day")
// }

// else if(day === 'tuesday'){
//     console.log(`plan for learning new skill`)
// }
// else if(day === 'wendensday'){
//     console.log(`plan for write code `)
// }
// else if (day === 'thurday' || day === 'friday')
// {
//     console.log(`plan for trip`)
// }
// else if (day === 'saturday')
// {
//     console.log(`enjoy the night`)
// }
// else if (day === 'sunday')
// {
//     console.log(`ready the mindset to tommorow ofc`)
// }
// else{
//     console.log(`enter the valid day`)
// }
// function suraj(){
//     console.log("my name is suraj pithva")
// }
// suraj()
// suraj()

// funcation declaration
// function calcAge(birthday){
//     return 2037 -birthday;
// }
// const age1 = calcAge(2024);

//funcation expression

// const calcAge2 = function (birthday) {
//     return 2037 - birthday
// }
// const age2 = calcAge2(1991);
// console.log(age1,age2)

//function into function

// function cutfriutpieces(fruit){
//     return fruit * 4;
// }

// function fruitprocessor(apple,oranges){
//     const applepieces = cutfriutpieces(apple);
//     const orangepieces = cutfriutpieces(oranges);

//     const juice = `juice with ${applepieces} piece of apple ${orangepieces} piece of orange.`;
//     return juice
// }

// console.log(fruitprocessor(3,4))
//const calcAverage = (a ,b ,c)  =>  (a + b + c) / 3;

// arrys method
// push method
// const friedns = ['suraj','aamir','jay']
// friedns.push('almas')
// console.log(friedns)
// //seconds method
// friedns.unshift('mihir')
// console.log(friedns)
// console.log(friedns.length)

// //remove the last elemnts of arrys
// friedns.pop()
// console.log(friedns)

// //remove the first elemnts of arrys

// friedns.shift()
// console.log(friedns)

// // include method useful when if any arrys in elements then it's return true otherwise false
// console.log(friedns.includes('suraj'))
// console.log(friedns.includes('ganesh bhai'))

// objects use this funcation
// const suraj = {
//     firstname: 'sun',
//     lastname: 'pithva',
//     birthyear: 2002,
//     job: 'developer',
//     hasDriverLincence: true,
//     friends: ['aamir','jainikbhai','ganeshbhai'],

//     calcAge: function (){
//         console.log(this);
//         return 2037 - this.birthyear;

//     }

// }

// console.log(suraj.calcAge());

// object

// const suraj = {
//     firstname: 'sun',
//     middlename: 'ajaybhai',
//     lastname: 'pithva',
//     birthyear: 2002,
//     job: 'developer',
//     hasDriverLincence: true,
//     friends: ['aamir','jainikbhai','ganeshbhai']
// }
// console.log(suraj)
// const namekey = 'name';
// console.log(suraj['middle' + namekey])

// const intersted = prompt("what do you want to from user")

// if(suraj[intersted]){
//     console.log(suraj[intersted])
// }else{
//     console.log(`wrong request! choose between firstname, lastname, age, job`)
// }

// suraj.location = 'ahmedabad';
// suraj['twitter'] = '@surajpithva'
// console.log(suraj)

// console.log(`${suraj.firstname} has ${suraj.friends.length} friends, and his bestfriend is ${suraj.friends[0]}`);

// const mark = {
//     name: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//        calcBMI: function (){
//        this.bmi = this.mass / this.height ** 2
//        return this.bmi
// }
// };
// const john = {
//     name: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function (){
//         this.bmi = this.mass / this.height ** 2
//         return this.bmi
// }
// }

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi,john.bmi);

// if (mark.bmi > john.bmi){
//     console.log(`${mark.name} BMI ${mark.bmi} is higher than ${john.name} ${john.bmi} `)
// }else{
//     console.log(`${john.name} BMI ${john.bmi} is higher than ${mark.name} ${mark.bmi} `)
// }

//John's BMI (28.3) is higher than Mark's (23.9)!

// for loop

// for(let i = 1; i<=10; i++){
//     console.log(`suraj ${i}`)
// }

// const year = [2022,2025,1991,1950]
// const ages = []
// for(let i = 0; i < year.length; i++){
//     ages.push(2037 - year[i]);
// }
// console.log(ages)

// continue

// for(let i = 0; i < 10; i++){
//     if(i == 5) continue
//     console.log(i)
// }

// break
// for(let i = 0; i < 10; i++){
//     if(i == 5) break
//     console.log(i)
// }

//while loop

//  let i = 1;
//  while(i <= 10){
//      console.log("heyy suraj(i)")
//      i++
// }

// math random funcation

// let dice = Math.random();
// console.log(dice)
