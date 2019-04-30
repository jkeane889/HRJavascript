/*

Write a function called "removeElement".

Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter.

Notes:

If all the elements match, it should return an empty array.
If an empty array is passed in, it should return an empty array.

*/

function removeElement(array, discarder) {
    var newArray = (array != []) ? array : []
    console.log(newArray.length)
    if (newArray.length > 0) {
        for (var i = 0; i <= newArray.length - 1; i++) {
            if (newArray[i] == discarder) {
                newArray.splice(i, 1);
                i--;
            }
        }
        return newArray
    } else {
        return newArray
    }
}

var output = removeElement([2, 2, 2], 2);
console.log(output); // --> [1, 3, 1]
