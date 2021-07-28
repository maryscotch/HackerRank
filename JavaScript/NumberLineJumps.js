// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {

    let cangaroo1 = x1;
    let cangaroo2 = x2;

    if (v1 <= v2) {
        return "NO";
    } 
        
    while (true) {
        cangaroo1 = cangaroo1 + v1;
        cangaroo2 = cangaroo2 + v2;
        
        if (cangaroo1 === cangaroo2) {
            return "YES";
        } 
        
        if (cangaroo1 > cangaroo2) {
            return "NO";
        }
    }
    return "NO";
}

let output = kangaroo(0, 3, 4, 2);
console.log(output);