// library

function randomRGB() {
  var number = Math.random() * 255;
  number = Math.floor(number);
  return number;
}

function printDate() {
    var today = new Date();
    return today;
}

function sumProduct(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

function randomNumber() {
    var chicken = Math.random() * 100;
    var money = Math.floor(chicken);
    return money;
}

function winky(text) {
    return text + " ;)";
}

function findMean(numbers) {
    let length = numbers.length;
    let total = 0;
    for (var i = 0; i < length; i++) {
     total = total + numbers[i];
    }
    return total / length;
}

function findMedian(values) {
    values.sort((a, b) => a - b);
    let lowMiddle = Math.floor((values.length - 1) / 2);
    let highMiddle = Math.ceil((values.length - 1) / 2);
    let median = (values[lowMiddle] + values[highMiddle]) / 2;
    return median;

}

function findMode() {



}

module.exports = {
    rgb: randomRGB,
    date: printDate,
    numbre: randomNumber,
    wink: winky,
    add: sumProduct,
    mean: findMean,
    median: findMedian,
    mode: findMode
};
