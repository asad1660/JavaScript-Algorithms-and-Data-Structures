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
  temp = temp
    .sort((a, b) => {
      if (a.frequency == 1 && b.frequency == 1) {
        return a.val - b.val;
      } else {
        return b.frequency - a.frequency;
      }
    })
    .map((ele) => {
      return ele.val;
    });
  console.log(temp.join(" "));
  return temp;
}
console.log(sortByFrequency([1, 4, 4, 5, 5, 6, 2, 3, 3, 3]));
