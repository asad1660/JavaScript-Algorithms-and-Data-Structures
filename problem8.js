// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false

function sameFrequency(n1, n2) {
  let freq = {};
  let freq1 = {};

  for (let item of n1.toString().split("")) {
    freq[item] = (freq[item] || 0) + 1;
  }
  for (let item of n2.toString().split("")) {
    freq1[item] = (freq1[item] || 0) + 1;
  }
  console.log("freq", freq);
  console.log("freq1", freq1);
  for (let value in freq) {
    console.log(value);
    if (!(value in freq1)) {
      return false;
    }

    if (!(freq[value] == freq1[value])) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(22, 222)); // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false
