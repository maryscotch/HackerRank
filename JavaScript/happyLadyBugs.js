// https://www.hackerrank.com/challenges/happy-ladybugs/problem

function happyLadybugs(b) {
	// Write your code here
	if (b.search(/[A-Z]/) == -1) {
		return "YES";
	}

	if (b.indexOf("_") != -1) {
		let str = b.replace(/_/g, "");
		for (let i = 0; i < str.length; i++) {
			let reg = new RegExp([str[i]], "g");
			if ((str.match(reg)).length == 1) {
				return ("NO");
			}
		}
		return ("YES");
	}

	if (b.indexOf("_") == -1) {
		let str = "";
		let count = null;
		for (let i = 0; i < b.length; i++) {
			if (count == null || b[i] == str) {
				count++;
				str = b[i];
			}
			if (count == 1 && b[i] != str) {
				return "NO";
			}
			if (b[i] != str) {
				count = 1;
				str = b[i];
			}
		}
		if (count == 1) {
			return "NO";
		}
		return "YES";
	}

}

let test = "RRGGBBXX";

let result = happyLadybugs(test);
console.log(result);