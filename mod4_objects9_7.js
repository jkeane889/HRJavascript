/*
Write a function called "getLengthOfLongestElement".

Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

Notes:

It should return 0 if the array is empty.
*/

function getLengthOfLongestElement(words) {
    if (Array.isArray(words) && words != [] && words != undefined) {
        if (words.length > 0) {
            var stringLengths = []
            for (var i = 0; i <= words.length - 1; i++) {
                if (words[i] != undefined) {
                    stringLengths.push(words[i].length)
                }
            }
            var max = Math.max.apply(null, stringLengths);
            return max
        } else {
            return 0
        }
    } else {
        return []
    }
}


var output = getLengthOfLongestElement(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
