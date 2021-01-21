console.log('[a] DATA')
const AvgscoreNets = (96 + 108 + 89) / 3;
const AvgscoreKnicks = (88 + 91 + 110) / 3;
console.log('Nets ' + AvgscoreNets)
console.log('Knicks ' + AvgscoreKnicks)

console.log('          ')

console.log('DATA BONUS 1')
const AvgscoreNetsB1 = (97 + 112 + 101) / 3;
const AvgscoreKnicksB1 = (109 + 95 + 123) / 3;
console.log('Nets ' + AvgscoreNetsB1)
console.log('Knicks ' + AvgscoreKnicksB1)
if (AvgscoreKnicksB1 > AvgscoreNetsB1 && AvgscoreKnicksB1 >= 100) {
    console.log("Knicks win, Nets lose");
}
if (AvgscoreNetsB1 > AvgscoreKnicksB1 && AvgscoreNetsB1 >= 100) {
    console.log("Nets win, Knicks lose");
}

console.log('          ')

console.log('DATA BONUS 2')
const AvgscoreNetsB2 = (97 + 112 + 101) / 3;
const AvgscoreKnicksB2 = (109 + 95 + 106) / 3;
console.log('Nets ' + AvgscoreNetsB2)
console.log('Knicks ' + AvgscoreKnicksB2)
if (AvgscoreKnicksB2 > AvgscoreNetsB2 && AvgscoreKnicksB2 >= 100) {
    console.log("Knicks win, Nets lose");
}
if (AvgscoreNetsB2 > AvgscoreKnicksB2 && AvgscoreNetsB2 >= 100) {
    console.log("Nets win, Knicks lose");
}
else {
    console.log('DRAW! - NETS AND KNICKS ')
}

console.log('  ')


console.log('[b] DATA')
// return true if in range tip 15% otherwise false 20%
function inRange(x, min, max) {
    return ((x - min) * (x - max) <= 0);
}
console.log('275 ' + inRange(275, 30, 300));  //true
const Tip275 = (275 * 0.15)
const TotalValue275 = (275 + Number(Tip275))
console.log('The bill was 275' + ', the tip was ' + Tip275 + ', and the total value was ' + TotalValue275)

console.log('28 ' + inRange(28, 30, 300));    //false
const Tip28 = (28 * 0.20)
const TotalValue28 = (28 + Number(Tip28))
console.log('The bill was 28' + ', the tip was ' + Tip28 + ', and the total value was ' + TotalValue28)

console.log('430 ' + inRange(430, 30, 300));  //false
const Tip430 = (430 * 0.20)
const TotalValue430 = (430 + Number(Tip430))
console.log('The bill was 430' + ', the tip was ' + Tip430 + ', and the total value was ' + TotalValue430)

console.log('  ')


console.log('[c] DATA')
let fahrenheit = 20;
let fahrenheiTonC = ((fahrenheit - 32) * 5) / 9;
let celsius = 30;
let celsiusToF = (celsius * 9) / 5 + 32;

console.log(`fahrenheit ${celsius}  F     `)
console.log(`celsius ${fahrenheit}  C     `)