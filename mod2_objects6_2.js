/*

Write a function called "removeNumberValues".

Given an object, "removeNumberValues" removes any properties whose values are numbers.

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }

*/

function removeNumberValues(obj) {
    for (var i = 0; i <= Object.keys(obj).length - 1; i++) {
        var x = Object.values(obj)[i];
        if (Number.isInteger(x)) {
            delete obj[Object.keys(obj)[i]]
        }

    }
    return obj
}

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
    
