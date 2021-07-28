// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    let roundNumArray = grades.map(value =>  {
        // 37以下だった時
        if (value <= 37) {
            return value;
        }

        // ５の倍数
        if (value%5 >= 3) {
            return Math.ceil(value/5)*5;
        } else {
            return value;
        }
    });

    return roundNumArray;
}

let array = [73, 67, 38, 33];
let output = gradingStudents(array);
console.log(output);