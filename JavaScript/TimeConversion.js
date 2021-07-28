// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
    /*
    * Write your code here.
    */

    let AMorPM = s.slice(8, 10);
    // console.log(AMorPM);

    let mmss = s.slice(2, 8);

    if (AMorPM === "AM") {
        let AM12 = s.slice(0, 2);
        if (AM12 === "12") {
            // 正子（夜）
            let militaryTime = "00" + mmss;
            return militaryTime;
        } else {
            // 正午（お昼）
            let militaryTime = s.slice(0, 8);
            return militaryTime;
        }
    } else if (AMorPM === "PM") {
        let PM12 = s.slice(0, 2);

        if (PM12 === "12") {
            let militaryTime = s.slice(0, 8);
            return militaryTime;
        } else {
            let PMhour = parseInt(s.slice(0, 2));
            let militaryHour = (PMhour + 12).toString();

            let militaryTime = militaryHour + mmss;
            return militaryTime
        }
    }
}

let time = "07:05:45PM";
let output = timeConversion(time);
console.log(output);