/* Write a function called "select".

Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array.

Notes:

If keys are present in the given array, but are not in the given object, it should ignore them.
It does not modify the passed in object.
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }

*/

function select(arr, obj) {
    var newDict = {}
    for (var i = 0; i <= arr.length - 1; i++) {
        for (var j = 0; j <= Object.keys(obj).length; j++) {
            if (arr[i] === Object.keys(obj)[j]) {
                newDict[Object.keys(obj)[j]] = Object.values(obj)[j]
            }
        }
    }
    return newDict
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
