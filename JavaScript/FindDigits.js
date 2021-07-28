// https://www.hackerrank.com/challenges/find-digits/problem

function findDigits(n) {
    let nStr = String(n);
    let count = 0;
    for (let i = 0; i <= nStr.length - 1; i++) {
        let num = Number(nStr[i]);
        if (n%num === 0) {
            count++;
        }
    }
    return count;
}


let n1 = 12,
	n2 = 1012;

let output = findDigits(n2);
console.log(output);