// https://www.hackerrank.com/challenges/equality-in-a-array/problem

function equalizeArray(arr) {
    let obj = {};
    let elms = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        let val = arr[i];
        if (obj[val]) {
            obj[val] += 1;
        } else {
            obj[val] = 1;
        }

        if (obj[val] > elms) {
            elms = obj[val];
        }
    }

    let deletionNum = arr.length - elms;
    return deletionNum;
}


let arr = [3, 3, 2, 1, 3];
let output = equalizeArray(arr);
console.log(output);