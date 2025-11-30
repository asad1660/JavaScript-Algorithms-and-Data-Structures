function findAllDuplicates(array) {
  // add whatever parameters you deem necessary - good luck!
  const duplicate = [];
  const s = new Set();
  for (let i = 0; i < array.length; i++) {
    console.log("before", s.has(array[i]), array[i]);
    s.has(array[i]) ? duplicate.push(array[i]) : s.add(array[i]);
    console.log("after", s.has(array[i]), array[i]);
  }
  return duplicate;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));
