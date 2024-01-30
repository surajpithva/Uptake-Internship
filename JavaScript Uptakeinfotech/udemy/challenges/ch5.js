const billValue = (125 + 555 + 44) / 3

function calcTip(bill){
    // (arrow funcation) const calcTip = bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.2;
    return bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.2;
    


}
const bills = [125,555,180];
const tips = [calcTip (bills[0]),(bills[1]),(bills[2])];
const total = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]]
// for just in example const total1 = (`the ${bills} is and ${tips} is that`) 
console.log(bills,tips,total);