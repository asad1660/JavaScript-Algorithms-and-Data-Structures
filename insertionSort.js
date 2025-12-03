function insertionSort(arr, comparator) {
  // add whatever parameters you deem necessary - good luck!
  if (typeof comparator !== "function") {
    comparator = function (a, b) {
      return a - b; // default: numeric ascending
    };
  }
  for (var i = 1; i < arr.length; i++) {
    var current = arr[i];
    for (var j = i - 1; j >= 0 && comparator(arr[j], current) > 0; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
}
console.log(insertionSort([5, 2, 9, 1, 5, 6])); // [1, 2, 5, 5, 6, 9]
