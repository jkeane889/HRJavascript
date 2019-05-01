/*

Write a function called "getOddLengthWordsAtProperty".

Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If it contains no odd length elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the given key, it should return an empty array.

*/

function getOddLengthWordsAtProperty(obj, key) {

    function newArray (obj, key) {
        var emptyArray = []
        if (Array.isArray(obj[key]) && obj[key] != {} && obj[key] != undefined) {
            return obj[key]
        } else {
            return emptyArray
        }
    }

    var anotherEmptyArray = []
    var testArray = newArray(obj, key)
    console.log(testArray.length)
    if (testArray.length > 0) {
        for (var i = 0; i <= testArray.length - 1; i++) {
            if (testArray[i].length % 2 === 0) {
                testArray.splice(i, 1)
                i--;
            }
        }
        return testArray
    } else {
        return anotherEmptyArray
    }
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']
