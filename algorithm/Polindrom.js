function sumOfPairs(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      sum += arr[i] + arr[j];
    }
  }
  return sum;
}

function sumOfPairs2(arr) {
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum += (arr[i - 1] + arr[i]) * 2;
  }
  return sum;
}
const myArray = [1, 2];
console.log(sumOfPairs(myArray)); // Результат: 40
