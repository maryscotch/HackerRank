// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
    let billSum = 0;
    for (let i = 0; i <= bill.length - 1; i++) {
        if (i === k) {
            continue;    
        }
        billSum = billSum + bill[i];
    }

    if (b === billSum/2) {
        console.log("Bon Appetit");
    } else {
        console.log(b - billSum/2);
    }
}

let k = 1;
let bill = [3, 10, 2, 9];
let b = 7;
let output = bonAppetit(bill, k, b);
console.log(output);