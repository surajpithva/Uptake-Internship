const bills = [200,500,10,458,147,258,369,857,100]
let tips = []
let totals = []
function calcTip(bill){
    return bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.2;
}
for (let i = 0; i<bills.length;i++){
    let tip = calcTip(bills[i])
    tips.push(tip)
    let total = tip + bills[i]
    totals.push(total)
    console.log(`tip of bill ${bills[i]} is ${tip} and total is  ${total}.`)



}

console.log("total of bills",totals)