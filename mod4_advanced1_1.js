/*

Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

Notes:

If given an empty string, countAllCharacters should return an empty object.
var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}

*/

function countAllCharacters(str) {
    function createDict(newArray) {
        for (var i = 0; i <= newArray.length; i++) {
            for (var j = i + 1; j <= newArray.length; j++) {
                if (newArray[i] === newArray[j]) {
                    newArray.splice(j, 1);
                }
            }
        }
        return newArray
    }

  var countChar = {}
  var strArray = str.split("")
  var dictValues = createDict(strArray)
  console.log(dictValues)
  for (var i = 0; i <= dictValues.length - 1; i++) {
    var charAmount = 0
    for (var j = 0; j <= str.length; j++) {
      if (dictValues[i] === str[j]) {
        charAmount += 1
        }
      }
    countChar[dictValues[i]] = charAmount
  }
  return countChar
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
