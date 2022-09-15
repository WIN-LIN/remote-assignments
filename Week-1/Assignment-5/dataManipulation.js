function count(input) {
  let len = input.length;
  let letter = []; // record the count of each letter
  //initialize letter with 0
  for (let i = 0; i < 26; i++) {
    letter.push(0);
  }

  for (let i = 0; i < len; i++) {
    let index = input[i].charCodeAt(0) - 97;
    //console.log(`${input[i]}: ${index}`);
    letter[index]++;
  }

  let output = {};
  for (let i = 0; i < 26; i++) {
    if (letter[i] > 0) {
      let char = String.fromCharCode(97 + i);
      //console.log(char);
      output[char] = letter[i];
    }
  }

  return output;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  let len = input.length;
  let output = [];
  output.push(input[0]);
  for (let i = 1; i < len; i++) {
    let target = input[i].key;
    let exist = false;
    //console.log(target);

    for (let j = 0; j < output.length; j++) {
      if (target == output[j].key) {
        output[j].value += input[i].value;
        //console.log(`${output[j].key} update: ${output[j].value}`);
        exist = true;
        break;
      }
    }
    if (!exist) {
      output.push(input[i]);
      //console.log(`push: ${input[i].key}:${input[i].value}`);
    }
  }
  return output;
}

let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
