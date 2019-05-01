/*

Write a function called "filterOddLengthWords".

Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

*/

function filterOddLengthWords(words) {

    function checkLen(word) {
        if (word.length % 2 != 0) {
            return word
        }
    }

    if (Array.isArray(words) && words != [] && words != undefined) {
        if (words.length > 0) {
            var newArray = words.filter(checkLen)
            return newArray
        } else {
            return []
        }
    } else {
        return []
    }
}




var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
