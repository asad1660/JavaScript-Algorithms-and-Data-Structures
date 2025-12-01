function sortByFrequency(arr) {
  let freq = {};
  for (let val of arr) {
    freq[val] = (freq[val] || 0) + 1;
  }
  console.log(freq);
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push({
      val: arr[i],
      frequency: freq[arr[i]],
      index: i,
    });
  }
  console.log(temp);
  const result = temp.sort((a, b) => {
    if (a.frequency !== b.frequency) {
      return b.frequency - a.frequency;
    } else {
      return a.index - b.index;
    }
  });
  console.log(result);
  return result;
}
console.log(sortByFrequency([4, 4, 5, 5, 6, 2, 3, 3, 3]));
