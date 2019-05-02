/*

Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:

If the given array is empty, it should return 0.
If the array contains no numbers, it should return 0.

*/

function findSmallestNumberAmongMixedElements(arr) {
 function checkElement(element) {
        return typeof element === 'number';
    }

    var x = arr.some(checkElement);

    if (x === true && arr.length != 0) {
        var numbers = []
        for (var i = 0; i < arr.length; i++) {
          if (typeof arr[i] === 'number') {
              numbers.push(arr[i])
          }
        }
        var shortest = numbers.sort(function (a, b) {
            return a - b
        });
        return shortest[0]
    } else {
      return 0;
      }
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
