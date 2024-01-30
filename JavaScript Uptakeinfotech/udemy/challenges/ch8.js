const data1 = [17, 21, 23];
let str = " ";

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]} ºC in ${i + 1}days...`;
  }
  console.log("..." + str);
};
printForecast(data1);
