/*

Your task is to write a function that will find the longest single-word
palindrome within an input phrase (string). The phrase inputted will only
contain letters (no symbols, punctuation, or numbers). Your palindrome detection
should be case-insensitive. If there are multiple palindromes of equal length, return the last one.

*/

var firstWord = "realtime"
var secondWord = "racecar"

function findLongestPalindrome(sentence) {
  var words = sentence.split(' ')
  var reversedWords = []
  for (var i = 0; i < words.length; i++) {
    var reversedWord = reverseString(words[i])
    reversedWords.push(reversedWord)
  };
  reversedWords.sort(function(a, b) {return b.length - a.length});
  if (reversedWords[0].length === reversedWords[1].length) {
      return reversedWords[1];
  } else {
      return reversedWords[0];
  };
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
}

function reverseString(string) {
    var reversedWord = '';
    for (var i = string.length; i >= 0; i--) {
        var char = string.charAt(i)
        reversedWord += char
    };
    if (string === reversedWord) {
      return reversedWord
    } else {
      return ''
    }
};

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

findLongestPalindrome("time racecar nurse")

// ASSERTION FUNCTION(S) TO BE USED

function assertEqual(expected, actual, testName) {
    if (expected === actual) {
        console.log(`passed`)
    } else {
        console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`)
    }
}

// TESTS CASES

var x = findLongestPalindrome("time racecar civic")
assertEqual("racecar", x, 'longest palindrome checker')
