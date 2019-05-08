/*

Write a function called assertArraysEqual. It will be a function that takes three parameters: actual will be an array of scalar values, and should ideally be the result of calling a function that you are testing. (presumably the function being tested should return an array of scalar values); expected, also an array of scalar values, should be the theoretical result of calling your function (or, what you "expect" the function to return). Finally, testName will be a string, and should describe what a call to assertArraysEqual is verifying about the function being tested.

*/

function assertArraysEqual(actual, expected, testName) {
    var boolsStorage = []

    if (actual.length === expected.length) {
        for (var i = 0; i < actual.length; i++) {
            if (actual[i] === expected[i]) {
                boolsStorage.push(true)
            } else {
                boolsStorage.push(false)
            }
        }

        var different = boolsStorage.includes(false);

        if (different === true) {
            console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`)
        } else {
          console.log(`passed`)
        }
    } else {
        console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`)
    }
}

// var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
// var actual = 'broken'.split('');
// assertArraysEqual(actual, expected, 'splits string into array of characters');

var expected_1 = [1, 1, 2, 3, 5, 8, 13, 14];
var actual_1 = [1, 1, 2, 4, 5, 8, 13];
assertArraysEqual(actual_1, expected_1, 'generates first 7 Fibonacci numbers');
