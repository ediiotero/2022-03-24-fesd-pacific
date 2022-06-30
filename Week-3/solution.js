// Recap: Write a loop that will prompt the user 3 times 
// and store the response in an array and console.log or alert
//  the answers when the loop is done

const questions = [
    "What is your name?", 
    "What is your favorite color?", 
    "What city are you in?"
];

// const answers = [];

// for (let index = 0; index < questions.length; index++) {
//     const answer = prompt(questions[index]);
//     answers.push(answer);
// };

// alert(answers)

// =====================

// Write a function that takes in an the num Array.
// Remove all the odd number and multiply the rest by 3.
// Return the first number in the array

const num = [2,5,9,10,23];

// function getNum(numAry) {
//     const noOdd = numAry.filter(function(number){
//         return number % 2 === 0
//     });
//     const multiNum = noOdd.map(function(number){
//         return number*3
//     });

//     return multiNum[0]
// }

// console.log(getNum(num))

// ===================

// Create a function that will convert a Celsius to Fahrenheit and another 
// that will convert Fahrenheit to Celsius

// The function should take in a number and run the formula and return the converted temp

// To convert C to F: Divide by 5, then multiply by 9, then add 32
// To convert F to C: Deduct 32, then multiply by 5, then divide by 9

function celsiusToFahrenheit(celsius) {
    var celsiusInF = (celsius*9)/5 + 32;
    console.log(celsius + '°C is ' + celsiusInF + '°F');
  }
  
function fahrenheitToCelsius(fahrenheit) {
    var fahrenheitInC = ((fahrenheit - 32)*5)/9;
    console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
}

//   ========================

// Write a function will find the longest word in the array

var words = ["cat", "pizza", "javascript"]

var test = function(wordAry) {
  var currentWord = '';
  wordAry.forEach(function(word){
    if(currentWord.length < word.length){
      currentWord = word
    }
  });
 
  return currentWord
}

console.log(test(words))

// =============================

// Write a function that will take a word and/or sentence and remove all of the vowels
// and returns a new string not spaces (please account for upper and lower case letters, and spaces)
// ex: 'The Batman' should return 'thbtmn'

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

var test = function(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var wordAry = word.toLowerCase().split('').filter(function(letter) {
      return letter !== " "
    });
    var noVowels = wordAry.filter(letter => !vowels.includes(letter))
   
    return noVowels.join('');
  };
  
  console.log(test('The Batman'));

