/*

Write a function called "modulo".

Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

Notes:

Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
0 % ANYNUMBER = 0.
ANYNUMBER % 0 = NaN.
If either operand is NaN, then the result is NaN.
Modulo always returns the sign of the first number.

*/

function modulo(num1, num2) {
    var amountOfTimes = 0;
    var newNum = num1
    if (num1 === 0) {
        return 0
    } else if (num1 < 0 && num2 < 0) {
        var z = num1 / num2;
        if (Number.isInteger(z)) {
            return 0
        } else {
            while (newNum < num2) {
                newNum = newNum - num2
                amountOfTimes += 1
            }
        }
        var remainder = (num1 - (amountOfTimes * num2))
        return remainder
    } else if (num1 < 0 && num2 > 0) {
        var z = num1 / num2;
        if (Number.isInteger(z)) {
            return 0
        } else {
            while (newNum < -num2) {
                newNum = newNum + num2
                amountOfTimes += 1
            }
            var remainder = (num1 + (amountOfTimes * num2))
            return remainder
        }
    } else if (num1 > 0 && num2 < 0) {
        var z = num1 / num2;
        if (Number.isInteger(z)) {
            return 0
        } else {
            while (newNum > -num2) {
                newNum = newNum + num2
                amountOfTimes += 1
            }
            var remainder = (num1 + (amountOfTimes * num2))
            return remainder
        }
    } else if (num1 > 0 && num2 > 0) {
        var z = num1 / num2;
        if (Number.isInteger(z)) {
            return 0
        } else {
            while (newNum > num2) {
                newNum -= num2
                amountOfTimes += 1
            }
            var remainder = (num1 - (amountOfTimes * num2))
            return remainder
        }
    }
}

var output = modulo(-4, 2);
console.log(output); // --> 1


    // iterator = 0
    // num1 - num2 = +1 to iterator
    // new num1 - num2 = +1 iterator
    // new num1 - num2 = +1 iterator
    // ...
    // if num1 - num2 < 0, return last iterator before this
