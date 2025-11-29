// Write a function called maxSumArray which accepts an array of integers and
// a number called n. The function should calculate
// the maximum sum of n consecutive elements in the array.
// eg: input([1,2,5,2,8,1,5],2) output(10) //because 2+8 is the largest sum of 2 consecutive numbers
// eg: input([1,2,5,2,8,1,5],4) output(17) //because 2+5+2+8 is the largest sum of 4 consecutive numbers
// eg: input([4,2,1,6],1) output(6) //because 6 is the largest sum of 1 consecutive numbers
// eg: input([],4) output(null) //because there are not enough elements in the array
//sliding window pattern
function maxSumArray(arr, n) {
  let temp = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    max = max + arr[i];
  }
  temp = max;
  for (let j = n; j < arr.length; j++) {
    temp = temp - arr[j - n] + arr[j];
    max = Math.max(temp, max);
  }

  return max;
}
