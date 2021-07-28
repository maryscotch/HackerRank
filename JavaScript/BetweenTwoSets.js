// https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
    // Write your code here

    // a[1] <= b[0]
    let count = 0;
    for (let i = a.length - 1; i <= b[0]; i++) {
        let dividA = a.filter(val => {
            return (i%val === 0);
        });

        let dividB = b.filter(val => {
            return (val%i === 0);
        });

        if (dividA.length === a.length && dividB.length === b.length) {
            count++;
        }
    }
    return count;
}


let output = getTotalX([2, 4], [16, 32, 96]);
console.log(output);