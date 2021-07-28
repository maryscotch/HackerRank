// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {

    let Alice = 0;
    let Bob = 0;

    for (let i = 0; i <= a.length - 1; i++) {
        if (a[i] > b[i]) {
            Alice++;
        } else if (a[i] < b[i]) {
            Bob++;
        }
    }
    return [Alice, Bob];
}

let array1 = [5, 6, 7]
let array2 = [3, 6, 10]
let output = compareTriplets(array1, array2)
console.log(output)