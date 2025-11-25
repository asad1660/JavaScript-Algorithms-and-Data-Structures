//Big O Notation
//Time complexity
// A way to describe the performance or complexity of an algorithm
// Specifically, it describes the worst-case scenario
// Two problems different performances
// For example the below two functions do the same thing
// but have different performances
// The first function has a time complexity of O(n) because it has one loop that runs n times
// The second function has a time complexity of O(1) because it has only 3 operations
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
var time1 = performance.now();
addUpTo(1000000);
var time2 = performance.now();
console.log(`time elapsed: ${(time2 - time1) / 1000} seconds.`);

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
var time1 = performance.now();
addUpTo(1000000);
var time2 = performance.now();
console.log(`time elapsed: ${(time2 - time1) / 1000} seconds.`);

//results:
//time elapsed: 0.005600000023841858 seconds
//time elapsed: 0 seconds.
