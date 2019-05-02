/*

Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14

*/

function sumDigits(num) {

    function totalNum(total, value) {
        return total + value;
    }

    var digitType = Math.sign(num)
    console.log(digitType)

    if (num != 0 && digitType === -1) {
        var numString = num.toString()
        var stringArray = numString.split('')
        stringArray.shift()
        var numArray = []
        for (var i = 0; i < stringArray.length; i++) {
            var convertedString = Number(stringArray[i])
            numArray.push(convertedString)
        }
        numArray.splice(0, 1, (digitType * numArray[0]))
        console.log(numArray)
        var sum = numArray.reduce(totalNum)
        return sum
    } else if (num != 0) {
        var numString = num.toString()
        var stringArray = numString.split('')
        var numArray = []
        for (var i = 0; i < stringArray.length; i++) {
            var convertedString = Number(stringArray[i])
            numArray.push(convertedString)
        }
        var sum = numArray.reduce(totalNum)
        return sum
    } else {
        return 0
    }
}

var output = sumDigits(-316);
console.log(output); // --> 14
