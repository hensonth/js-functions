// S1 (DONE) Define a function maxOfTwoNumbers that takes two numbers as
// arguments and returns the largest of them. Use the if-then-else
// construct available in JavaScript. Do some Googling to figure
// this out if you forget how conditionals work.

function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    console.log('num1')
    return num1
  } else {
    console.log('num2')
    return num2
  }
}
console.log (maxOfTwoNumbers(22, 10))

// S2 (DONE) Define a function maxOfThree that takes three numbers as arguments
// and returns the largest of them.+

function maxOfThree (num1, num2, num3) {
  if (num1 > num2) && (num1 >num3) {
    console.log('num1 wins')
  } else if (num2 > num3) && (num2 > num1) {
    console.log('num2 wins')
  } else {
    console.log('num3 wins')
  }
}
maxOfThree(2, 7, 10)

// S3 (DONE) Write a function isCharacterAVowel that takes a character (i.e. a string
// of length 1) and returns true if it is a vowel and false, otherwise.+

function isCharacterAVowel (checker) {
   if (checker === 'a' || checker === 'e' || checker === 'i' || checker === 'o'
   || checker === 'u') {
       return true
   } else {
       return false
   }
}

console.log(isCharacterAVowel('e'))


// S4 (DONE) Define a function sumArray and a function multiplyArray that sums and multiplies
// (respectively) all the numbers in an array of numbers. For example,
// sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

function sumArray (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += (array[i])
  }
  return sum
}

console.log(sumArray([1, 2, 3]))

function multiplyArray (array2) {
  var multiplied = 1;
  for (var i = 0; i < array2.length; i++) {
    multiplied *= array2[i]
  }
  return multiplied
}

console.log(multiplyArray([1, 2, 3]))




// S5 Write a function that returns the number of arguments passed to the function when
// called.

var print_names = function() {
     for (var i=0; i<arguments.length; i++) console.log(arguments[i]);
}



// S6 (DONE) Define a function reverseString that reverses a string. For example,
// reverseString("jag testar") should return the string "ratset gaj".

function reverseString (reverser) {
  return reverser.split('').reverse().join('')
}

console.log(reverseString('jag testar'))


// S7 (Done) Write a function findLongestWord that takes an array of words and returns the
// length of the longest word in the array.
var array = ['hello', 'there', 'my', 'name', 'is', 'aladdin'];

function findLongestWord (longCheck) {
  var longestWord = 0

  for (var i = 0; i < longCheck.length; i++) {
      if (longCheck[i].length > longestWord) {
        longestWord = longCheck[i].length
      }
  }
  return longestWord
}
findLongestWord(array);

console.log(findLongestWord(array));

// S8 Write a function filterLongWords that takes an array of words and a number x and
// returns a new array of words that are longer than x characters long.

function filterLongWords (arr) {

}

/////////////// SEPARATION BETWEEN SHORT AND LONG ANSWERS //////////////////

// L1 Write a function lengths that accepts a single parameter as an argument,
// namely an array of strings. The function should return an array of numbers
// where each number is the length of the corresponding string.+

//var words = ["hello", "what", "is", "up", "dude"]
// lengths(words)  # => [5, 4, 2, 2, 4]

var words = ["hello", "what", "is", "up", "dude"];

function lengths(wordStrings) {
  var myArray = [];
  for (var i = 0; i < wordStrings.length; i++) {
    console.log(myArray);
    myArray.push(wordStrings[i].length);
  }
  console.log(myArray);
  return myArray;
}
lengths(words);

// // L2 Write a Javascript function called transmogrifier. This function should accept
// three arguments, which you can assume will be numbers. Your function should return
// the "transmogrified" result.
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number. For example, the transmogrified result of
// 5, 3, and 2 is (5 times 3) to the power of 2 is 225. Use your function to find the
// following answers.
// transmogrifier(5, 4, 3)
// transmogrifier(13, 12, 5)
// transmogrifier(42, 13, 7)

function transmogrifier(x, y, z) {
  var message = Math.pow((x*y), z);
  console.log(message);
  return message;
}

transmogrifier(5,3,2);
transmogrifier(13,12,5);
transmogrifier(42,13,7);

// L3 Write a function wordReverse that accepts a single argument, a string. The method
// should return a string with the order of the words reversed. Don't worry about
// punctuation.

function wordReverse(backwardSteps) {
  var sentence = backwardSteps;
  result = sentence.split("").reverse().join(" ")
  console.log(result);
  return result
}
backwardSteps("Now I know what a TV dinner feels like");
