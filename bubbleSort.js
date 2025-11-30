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
function bubblesSort(array) {
  for (let i = array.length; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(array, array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        //swapping new way of javascript
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        noSwap = false;
      }
    }
    console.log("breakkkkkk");
    if (noSwap) break;
  }
  return array;
}

console.log(bubblesSort([10, 1, 3, 4, 2, -4])); // true
