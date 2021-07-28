// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
    let sortArray = arr.sort((a, b) => a - b);

    let minNum = 0;
    for (let i = 0; i <= 3; i++) {
        minNum += sortArray[i];
    }

    let maxNum = 0;
    for (let i = 1; i <= sortArray.length -1; i++) {
        maxNum += sortArray[i];
    }

    console.log(minNum + " " + maxNum);
}


let array = [1, 2, 3, 4, 5]
let output = miniMaxSum(array)
