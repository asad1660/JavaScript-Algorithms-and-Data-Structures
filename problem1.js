// write a function which takes in a string and returns counts of each character in the string
//Understand the problem

//Explore concrete examples

// charCount("aaaa") // {a: 4 };

// charCount("hello") // {h:1, e:1, l:2, o:1}

// complex inputs

// charCount("my phone number is 182763")

// "Hello hi!" uppaercase and lowercase are the same?

//empty inputs?

//Break it down

//function charCount(str) {
//make object to return at end
//loop over string, for each character
//if character is a number/letter AND is key in object, add one to count
//if character is a number/letter AND not in object, add it to object and set value to 1
//if character is something else (space, period, etc.) don't do anything
//return object at end
//}
//Solve / Simplify

function charCount(str) {
  //make object to return at end
  const result = {};
  //loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    //if character is something else (space, period, etc.) don't do anything
    if (/[a-z0-9]/.test(char))
      if (result[char] > 0) {
        //if character is a number/letter AND is key in object, add one to count
        result[char]++;
      } else {
        result[char] = 1;
        //if character is a number/letter AND not in object, add it to object and set value to 1
      }
  }

  //return object at end
  return result;
}
console.log(charCount("Hi there!"));
