function countAandB(input) {
  let len = input.length;
  let numA = 0;
  let numB = 0;
  for (i = 0; i < len; i++) {
    if (input[i] == "a") {
      numA++;
    } else if (input[i] == "b") {
      numB++;
    }
  }
  let sum = numA + numB;
  if (sum == 0) {
    return sum;
  } else {
    if (numA > 1 && numB > 1) {
      return sum + " (" + numA + " ‘a’ letters and " + numB + " ‘b’ letters)";
    } else if (numA > 1 && numB == 1) {
      return sum + " (" + numA + " ‘a’ letters and " + numB + " ‘b’ letter)";
    } else if (numA == 1 && numB > 1) {
      return sum + " (" + numA + " ‘a’ letter and " + numB + " ‘b’ letters)";
    } else {
      return sum + " (" + numA + " ‘a’ letters and " + numB + " ‘b’ letter)";
    }
  }
}

function toNumber(input) {
  let len = input.length;
  let arr = [];
  for (i = 0; i < len; i++) {
    arr.push(input[i].charCodeAt(0) - 96);
  }
  return arr;
}
let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
