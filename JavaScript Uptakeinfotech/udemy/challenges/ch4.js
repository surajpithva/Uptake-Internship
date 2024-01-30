
// understand again 
const calcAverage = (a ,b ,c)  =>  (a + b + c) / 3;
console.log(calcAverage(3,4,5));




const scoreDol = calcAverage(50,50,100)
const scorekoal = calcAverage(60,60,100)

console.log(scoreDol);
console.log(scorekoal);


const checkWinner = function (avgDol,avgkoal){
    if (avgDol >= 2 * avgkoal){
    console.log(`Dolphins is winner (${avgDol} vs.  ${avgkoal} .` );
    } else if( scorekoal >= 2 * scoreDol ){
        console.log(`Koalas is winner (${avgkoal} vs.  ${avgDol} .`);
    }
    else{
        console.log('No teams win ');
    }
}
checkWinner (scoreDol,scorekoal);
checkWinner(100,200);






checkWinner(scoreDol,scorekoal)