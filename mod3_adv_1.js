/*

Write a function called "extend".

Given two objects, "extend" adds properties from the 2nd object to the 1st object.

Notes:

Add any keys that are not in the 1st object.
If the 1st object already has a given key, ignore it (do not overwrite the property value).
Do not modify the 2nd object at all.
var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}

*/

function extend(obj1, obj2) {
  var i = 0;
  while (i <= Object.keys(obj2).length - 1) {
    var keyValue = Object.keys(obj2)[i]
    if (keyValue in obj1) {
      i += 1;
      } else {
      var newKey = Object.keys(obj2)[i];
      var newValue = Object.values(obj2)[i];
      obj1[newKey] = newValue;
      i += 1;
      }
  }
  return obj1
}

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
