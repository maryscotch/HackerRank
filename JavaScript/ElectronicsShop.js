// https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let sumPrice = 0;
    for (let i = 0; i <= keyboards.length - 1; i++) {
        drives.forEach(val => {
            let price = keyboards[i] + val;
            if (price <= b && sumPrice < price) {
                sumPrice = price;
            } 
        });
    }

    if (sumPrice === 0) {
        return -1;
    }

    return sumPrice;
}

let keyboards = [5, 2, 8];
let drives = [3, 1];
let b = 10;

let output = getMoneySpent(keyboards, drives, b);
console.log(output);