/*

Write a function called "removeArrayValues".

Given an object, "removeArrayValues" removes any properties whose values are arrays.

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }

*/

function removeArrayValues(obj) {
    for (var i = 0; i <= Object.keys(obj).length - 1; i++) {
        var x = Object.values(obj)[i];
        console.log(x)
        if (Array.isArray(x)) {
            delete obj[Object.keys(obj)[i]]
        }
    }
    return obj
}

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }
