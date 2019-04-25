/*

Write a function called "getLengthOfTwoWords". Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9

*/

function getLengthOfTwoWords(word1, word2) {
  var lenWord1 = word1.length;
  var lenWord2 = word2.length;
  return lenWord1 + lenWord2
}

var output = getLengthOfTwoWords('some', 'words');
console.log(output);
