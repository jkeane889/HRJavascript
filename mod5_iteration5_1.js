/*

Write a function called "multiply".

Given 2 numbers, "multiply" returns their product.

Notes:

It should not use the multiply operator - *

*/

function multiply(num1, num2) {
    var multiply = 0;
    var sum = 0;
    if (num1 > 0) {
        while (multiply < num1) {
            sum += num2
            multiply += 1
        }
        return sum
    } else if (num1 < 0) {
        while (multiply > num1) {
            sum -= num2
            multiply -= 1
        }
        return sum
    } else if (num2 > 0) {
        while (multiply < num2) {
            sum += num1
            multiply += 1
        }
        return sum
    } else if (num2 < 0) {
        while (multiply > num2) {
            sum -= num1
            multiply -= 1
        }
        return sum
    }
}

var output = multiply(4, 7);
console.log(output); // --> 28
