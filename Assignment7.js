console.log('DATA 1')

const FirstPerson = "Lucas";
console.log(FirstPerson + ' ' + 'measurements(mass and height)1')
const LucasMass = 78;
const LucasHeight = 1.69;
console.log(LucasMass, LucasHeight)


const SecondPerson = "John";
console.log(SecondPerson + ' ' + 'measurements(mass and height)1')
const JohnMass = 92;
const JohnHeight = 1.95;
console.log(JohnMass, JohnHeight)


const LucasBMI = (LucasMass / LucasHeight ** 2);
const JohnBMI = (JohnMass / JohnHeight ** 2);

console.log(FirstPerson + ' ' + 'BMI' + ' ' + LucasBMI)
console.log(SecondPerson + ' ' + 'BMI' + ' ' + JohnBMI)

var LucasHigherBMI = LucasBMI > JohnBMI;
console.log('Knowing that ' + LucasBMI + ' ' + 'versus' + ' ' + JohnBMI);

if (LucasBMI > JohnBMI) {
    console.log('Lucas\'s BMI is higher than John\'s');
}

else {
    console.log('John\'s BMI is higher than Lucas\'s');
}

console.log(' ')

console.log('DATA 2')
console.log(FirstPerson + ' ' + 'measurements(mass and height)2')
const LucasMass2 = 95;
const LucasHeight2 = 1.88;
console.log(LucasMass2, LucasHeight2)


console.log(SecondPerson + ' ' + 'measurements(mass and height)2')
const JohnMass2 = 85;
const JohnHeight2 = 1.76;
console.log(JohnMass2, JohnHeight2)

const LucasBMI2 = (LucasMass2 / LucasHeight2 ** 2);
const JohnBMI2 = (JohnMass2 / JohnHeight2 ** 2);

console.log(FirstPerson + ' ' + 'BMI2' + ' ' + LucasBMI2)
console.log(SecondPerson + ' ' + 'BMI2' + ' ' + JohnBMI2)

console.log('Lucas and John are friends, Lucas is ' + LucasHeight2 + 'm tall and John is ' + JohnHeight2 + 'm tall')
console.log('So John has higher BMI than Lucas, that is ' + JohnBMI2)
// if (LucasBMI > JohnBMI) {
//     return "LucasHigherBMI";
// } else if (JohnBMI > LucasBMI) {
//     return "JohnHigherBMI";
// }