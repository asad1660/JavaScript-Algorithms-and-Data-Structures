// create a function that accepts two strings
// and checks whether they are anagrams of each other
// anagrams are words that contain the same characters but in different orders
// eg: "cinema" and "iceman" are anagrams
// eg: "hello" and "bye" are not anagrams
//uppercase and lowercase are the same
//no spaces or special character or numbers
//frequency counter pattern

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  //in the string no spaces or special character or numbers
  //breakdown the problem
  //we will create dictonary of each character appear how many times and then tell if its same
  if (str1.length !== str2.length) {
    return false;
  }
  const freq1 = {};
  const freq2 = {};

  for (let item of str1.split("")) {
    freq1[item.toLowerCase()] = (freq1[item.toLowerCase()] || 0) + 1;
  }

  for (let item of str2.split("")) {
    freq2[item.toLowerCase()] = (freq2[item.toLowerCase()] || 0) + 1;
  }

  for (let key in freq1) {
    let code = key.toString().charCodeAt(0);
    if (!(code > 96 && code < 123)) {
      return false;
    }
    if (!(key in freq2)) {
      return false;
    }
    if (!(freq1[key] == freq2[key])) {
      return false;
    }
  }
  return true;
}
console.log("anagram", validAnagram("Abc", "cba"));
