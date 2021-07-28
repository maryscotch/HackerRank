// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
    let socks = {};
    let pair = 0;
    for (let i = 0; i <= ar.length - 1; i++) {
        const sock = ar[i];
        if (socks[sock]) {
            socks[sock] += 1;
        } else {
            socks[sock] = 1;
        }

        if (socks[sock] === 2) {
            socks[sock] = 0;
            pair += 1;
        }
    }
    return pair;
}


let n = 9;
let array = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let output = sockMerchant(n, array);
console.log(output);