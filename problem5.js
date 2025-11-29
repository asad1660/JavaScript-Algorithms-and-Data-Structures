// Given the array: `[4, 4, 5, 5, 6, 3]`

// Sort this array based on the frequency of each element, where elements that appear more frequently should come first. If two elements have the same frequency, maintain their relative order of first appearance.

// **Analysis:**

// Frequency count:

// - 4 appears **2 times**
// - 5 appears **2 times**
// - 6 appears **1 time**
// - 3 appears **1 time**

// **Expected Output:**

// `[4, 4, 5, 5, 3, 6]`

function frequencySort(arr) {
  console.log("array", arr);
  const frequencyMap = {};

  for (let num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }
  const a = frequencyMap.sort((a, b) => {
    return frequencyMap[a] - frequencyMap[b];
  });
  console.log("frequency map", a);
}

frequencySort([4, 4, 5, 5, 6, 3].sort((a, b) => a - b));
