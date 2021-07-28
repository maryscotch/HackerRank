// https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {

    let space = " ";
    let mark = "#";
    let breakLine = "\n";
    let stair = "";
    for (let i = 1; i <= n; i++) {
        let spaces = space.repeat(n-i);
        let marks = mark.repeat(i);

        if (i === n) {
            stair = stair + spaces + marks;
        } else {
            stair = stair + spaces + marks + breakLine;
        }
    }

    console.log(stair);
}

let output = staircase(6)