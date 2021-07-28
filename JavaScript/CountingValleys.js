// https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(steps, path) {
    // Write your code here
    let height = 0;
    let valleyCount = 0;
    for(let i = 0; i <= path.length - 1; i++) {
        if(height === 0 && path[i] === 'D') {
            valleyCount++;
        }

        if (path[i] === 'U') {
            height++;
        } else {
            height--;
        }
    }
    return valleyCount;
}

let steps = 12;
let path = "DDUUDDUDUUUD";
let output = countingValleys(steps, path);
console.log(output);