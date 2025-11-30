/*
 * Complete the 'findNumber' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER k
 */

function findNumber(arr, k) {
  // Write your code here
  arr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === k) return "YES";
    if (arr[mid] < k) left = mid + 1;
    else {
      right = mid - 1;
    }
  }
  return "NO";
}

//write a code which find the odd num between l and r
function oddNumbers(l, r) {
  let result = [];
  for (let i = l; i <= r; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
}

//which of the following sorting algorithms has the best asymptotic run time complexity?
//
