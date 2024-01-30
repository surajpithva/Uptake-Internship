const Dolphins = 100 + 100 + 100 / 3;
const Koalas = 100 + 100 + 100 / 3;

console.log(`score of Dolphins team is ${Dolphins}`);
console.log(`score of Dolphins team is ${Koalas}`);

if(Dolphins > Koalas && Dolphins>=100){
    console.log(`Dolphins team score is highest comapre to Koalas team`)
}else if(Koalas > Dolphins && Koalas >=100){
    console.log(`Koalas team is win`)
}else if( Dolphins === Koalas && Dolphins >= 100 && Koalas >= 100){
    console.log(`draw`)
}else{
    console.log(`no wins the win tropy`)
}
