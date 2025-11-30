// function bubblesSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }

// console.log(bubblesSort([10, 1, 3, 4, 2])); // true
// function bubblesSort(array) {
//   for (let i = array.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }

// console.log(bubblesSort([10, 1, 3, 4, 2])); // true
// function bubblesSort(array) {
//   for (let i = array.length; i > 0; i--) {
//     let noSwap = true;
//     for (let j = 0; j < i - 1; j++) {
//       console.log(array, array[j], array[j + 1]);
//       if (array[j] > array[j + 1]) {
//         //swapping new way of javascript
//         [array[j], array[j + 1]] = [array[j + 1], array[j]];
//         noSwap = false;
//       }
//     }
//     console.log("breakkkkkk");
//     if (noSwap) break;
//   }
//   return array;
// }

// console.log(bubblesSort([10, 1, 3, 4, 2, -4])); // true

function bubbleSort(arr, comparator) {
  // 1. Default comparator (if none is provided)
  if (typeof comparator !== "function") {
    comparator = function (a, b) {
      return a - b; // numeric ascending
    };
  }

  // 2. Bubble Sort Logic (your style)
  for (let i = arr.length; i > 0; i--) {
    let noSwap = true;

    for (let j = 0; j < i - 1; j++) {
      // Use the comparator!!
      if (comparator(arr[j], arr[j + 1]) > 0) {
        // Swap (your modern JS swap)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }

    if (noSwap) break; // Optimization
  }

  return arr;
}
var moarKittyData = [
  { name: "LilBub", age: 7 },
  { name: "Garfield", age: 40 },
  { name: "Heathcliff", age: 45 },
  { name: "Blue", age: 1 },
  { name: "Grumpy", age: 6 },
];

function oldestToYoungest(a, b) {
  return a.age - b.age;
}

console.log(bubbleSort(moarKittyData, oldestToYoungest));

console.log(bubbleSort([10, 1, 3, 4, 2, -4])); // true
