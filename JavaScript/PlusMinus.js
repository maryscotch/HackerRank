// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    let numPlus = 0;
    let numMinus = 0;
    let num0 = 0;

    arr.forEach(val => {
        if (val === 0) {
            num0 += 1;
        }

        if (val > 0) {
            numPlus += 1;
        }

        if (val < 0) {
            numMinus += 1;
        }
    });
    
    console.log((numPlus/arr.length).toFixed(6));
    console.log((numMinus/arr.length).toFixed(6));
    console.log((num0/arr.length).toFixed(6));
}
