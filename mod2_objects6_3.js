/*

Write a function called "removeStringValues".

Given an object, "removeStringValues" removes any properties on the given object whose values are strings.

var obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }

*/

function removeStringValues(obj) {
    for (var i = 0; i <= Object.keys(obj).length - 1; i++) {
        var x = Object.values(obj)[i];
        if (typeof x === 'string') {
            delete obj[Object.keys(obj)[i]]
        }

    }
    return obj
}

var obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }
