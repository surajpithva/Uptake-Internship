const mark = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69, 

       calcBMI: function (){
       this.bmi = this.mass / this.height ** 2
       return this.bmi
}
};
const john = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function (){
        this.bmi = this.mass / this.height ** 2
        return this.bmi
}
}

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi,john.bmi);


if (mark.bmi > john.bmi){
    console.log(`${mark.name} BMI ${mark.bmi} is higher than ${john.name} ${john.bmi} `)
}else{
    console.log(`${john.name} BMI ${john.bmi} is higher than ${mark.name} ${mark.bmi} `)
}