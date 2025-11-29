//create a function that accepts unsorted array of numbers
//if the array contains pairs that sum to zero return that pair

//eg: input([-3,-2,-1,0,1,2,3]) output([[-3,3],[-2,2],[-1,1],[0,0]])
//the array will be of numbers only
//break down the problem
//we will use while loop and two pointer one at start and one at end
//if sum of both pointer is zero we will add that pair to result array and move both pointer
//if sum is greater than zero we will move end pointer to left
//if sum is less than zero we will move start pointer to right
//we will continue this until start pointer is less than end pointer
//multiple pointers pattern
function sumZero(arr) {
  console.log("array", arr);
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(
  "sum of zero",
  sumZero([-1, -2, -3, -4, 0, 1, 10, 3, 2].sort((a, b) => a - b))
);
