// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
    // Write your code here
    let maxNum = candles.reduce(function(a, b) {
        return Math.max(a, b);
    });

    let candleNum = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === maxNum) {
            candleNum++;
        }
    }

    return candleNum;
}


let candles = [3, 2, 1, 3]
let output = birthdayCakeCandles(candles);
console.log(output);