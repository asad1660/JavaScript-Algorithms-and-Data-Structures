// write a function called same which takes two arrays
// and returns true if every value in the array has it's corresponding value squared in the second array
//input([1,2,3]) output([1,4,9]) //true
//input([1,2,3]) output([1,4,8]) //false
//input([1,2,1]) output([4,1,1]) //false (must be same frequency)

//the lengths of the arrays must be the same

// function same(a1, a2) {
//   const copy = [];
//   for (let item of a1) {
//     let correctValue = a2.find((e) => e == item ** 2);
//     if (correctValue == undefined) {
//       return false;
//     } else {
//       copy.push(correctValue);
//     }
//   }

//   if (a1.length == copy.length) {
//     return true;
//   }
//   {
//     return false;
//   }
// }

// console.log(same([1, 2, 3], [1, 4, 9]));

// the issue with the above solution is the edge case where same frequency is not maintained
//eg: input([1,2,3,2]) output([1,4,9,1]) //false (must be same frequency)

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex == -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }
// console.log(same([1, 2, 3, 2], [1, 4, 9, 4]));
//the issue with the above solution is that it has a time complexity of O(n^2)
//because of the nested loop , if 1000items in a1 it will have to run 1000*1000 times in worst case

function same(arr1, arr2) {
  const freq1 = {};
  const freq2 = {};
  for (let item of arr1) {
    freq1[item] = (freq1[item] || 0) + 1;
  }
  for (let item2 of arr2) {
    freq2[item2] = (freq2[item2] || 0) + 1;
  }

  for (let key in freq1) {
    if (!(key ** 2 in freq2)) {
      return false;
    }

    if (!(freq2[key ** 2] == freq1[key])) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2], [1, 4, 9, 4]));
