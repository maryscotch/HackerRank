// https://www.hackerrank.com/challenges/the-time-in-words/problem

function timeInWords(h, m) {
    let numbers = [
        'zero',
        'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eightteen', 'nineteen', 'twenty',
        'twenty one', 'twenty two', 'twenty three', 'twenty four',
        'twenty five','twenty six', 'twenty seven', 'twenty eight',
        'twenty nine'
    ];

    if (m === 0) {
        return numbers[h] + " o' clock";
    }

    let time = '';

    // 分
    if (m === 30) {
        time += 'half';
    } else if (m % 15 === 0) {
        time += 'quarter';
    } else {
        let minutes = m < 30 ? numbers[m]: numbers[60 - m];
        time += minutes;

        time += m === 1? ' minute': ' minutes';
    }

    if (m <= 30) {
        time += ' past ';
    } else {
        time += ' to ';
        h++;
    }

    // 時間
    time += numbers[h];
    return time;
}


let h = 5,
	m = 47;

let output = timeInWords(h, m);
console.log(output);