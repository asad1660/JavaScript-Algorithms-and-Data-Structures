function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (arr[mid] !== val && left <= right) {
    if (val < arr[mid]) right = mid - 1;
    else left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }

  return arr[mid] == val ? arr[mid] : -1;
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7], 5));
console.log([0, 1, 2, 3, 4, 5, 6, 7].length);
