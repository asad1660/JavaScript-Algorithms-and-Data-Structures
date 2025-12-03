function merge(arr, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr.length && j < arr2.length) {
    console.log("-->", arr2[j], arr[i]);
    if (arr2[j] > arr[i]) {
      result.push(arr[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
    console.log("---", result);
  }
  while (i < arr.length) {
    result.push(arr[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  console.log(left, right);
  return merge(left, right);
}
console.log(mergeSort([312, 324, 3, 34, 232, 5, 12]));
//console.log(merge([1,10,50],[2,14,99,100]))
