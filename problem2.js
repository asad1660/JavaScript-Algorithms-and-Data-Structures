// write a function called same which takes two arrays
// and returns true if every value in the array has it's corresponding value squared in the second array
//input([1,2,3]) output([1,4,9]) //true
//input([1,2,3]) output([1,4,8]) //false
//input([1,2,1]) output([4,1,1]) //false (must be same frequency)

//the lengths of the arrays must be the same

function same(a1, a2) {
  const copy = [];
  for (let item of a1) {
    let correctValue = a2.find((e) => e == item ** 2);
    if (correctValue == undefined) {
      return false;
    } else {
      copy.push(correctValue);
    }
  }

  if (a1.length == copy.length) {
    return true;
  }
  {
    return false;
  }
}

console.log(same([1, 2, 3], [1, 4, 9]));
