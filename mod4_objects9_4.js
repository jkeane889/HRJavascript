/*

Write a function called "getAverageOfElementsAtProperty".

Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key.

Notes:

If the array at the given key is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0.

*/

function getAverageOfElementsAtProperty(obj, key) {
    if (Array.isArray(obj[key]) && obj[key] != [] && obj[key] != undefined) {
        if (obj[key].length > 0) {
            var sum = 0
            for (var i = 0; i <= obj[key].length - 1; i++) {
                sum = sum + obj[key][i]
            }
            var average = sum / obj[key].length
            return average
        } else {
            return 0
        }
    } else {
        return 0
    }
}

var obj = {
  key: []
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
