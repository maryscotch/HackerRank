// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
    let winCount = 0;
    let loseCount = 0;

    let maximum = scores[0];
    let minimum = scores[0];
    
    for (let i = 1; i <= scores.length - 1; i++) {
        if (scores[i] > maximum) {
            winCount++;
            maximum = scores[i];
        } else if (scores[i] < minimum) {
            loseCount++;
            minimum = scores[i];
        }
    }
    return [winCount, loseCount];
}


let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let output = breakingRecords(scores);
console.log(output);