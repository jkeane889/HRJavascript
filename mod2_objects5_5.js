/*

Write a function called "removeOddValues".

Given an object, "removeOddValues" removes any properties whose values are odd numbers.

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }

*/

function removeOddValues(obj) {
    for (var i = 0; i <= Object.keys(obj).length; i++) {
        if (Object.values(obj)[i] % 2 != 0) {
            delete obj[Object.keys(obj)[i]]
        }
    }
}

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { b: 3 }
