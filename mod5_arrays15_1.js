/*

Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:

If there are ties, it should return the first element to appear in the given array.
Expect the given array to have values other than strings.
If the given array is empty, it should return an empty string.
If the given array contains no strings, it should return an empty string.

*/

function findShortestWordAmongMixedElements(arr) {
    function checkElement(element) {
        return typeof element === 'string';
    }

    var x = arr.some(checkElement);

    if (x === true && arr.length != 0) {
        var strings = []
        for (var i = 0; i < arr.length; i++) {
          if (typeof arr[i] === 'string') {
              strings.push(arr[i])
          }
        }
        console.log(strings)
        var shortest = strings.sort(function (a, b) {
            return a.length - b.length
        });
        return shortest[0]
    } else {
      return "";
      }
}

var output = findShortestWordAmongMixedElements(['yes', 8, 2 ]);
console.log(output); // --> 'two'
