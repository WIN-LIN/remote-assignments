function max(numbers) {
  let len = numbers.length;
  let max = 0;
  for (i = 0; i < len; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
function findPosition(numbers, target) {
  let len = numbers.length;
  for (i = 0; i < len; i++) {
    if (numbers[i] == target) {
      return i;
    }
  }
  return -1;
}
console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7

console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1
