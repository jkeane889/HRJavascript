/*

Write a function called "getOddElementsAtProperty".

Given an object and a key, "getOddElementsAtProperty" returns an array containing all the odd elements of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If it contains no odd elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.

*/

function getOddElementsAtProperty(obj, key) {
    if (Array.isArray(obj[key]) && obj[key] != [] && obj[key] != undefined) {
        for (var i = 0; i <= obj[key].length - 1; i++) {
            if (obj[key][i] % 2 === 0) {
                obj[key].splice(i, 1);
                i--;
            }
        }
        return obj[key]
    } else {
        return []
    }
}

var obj = {
  key: [2, 2, 6, 4, 8]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
                
