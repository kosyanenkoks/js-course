// не глубокое копирование

var newObject = {};
var obj1 = { name: "Егор", age: 25, hobby: ['football', 'gym'] };
var obj2 = {  write: true, read: true, family: {mother: 'Ann', father: 'Vasya'}  }

Object.assign (
    newObject,
    obj1,
    obj2
);

newObject.family.mother = 'Kate';
obj2;


//------------------------------

Object.assign(
    {},
    [1, 2, 3],
    '==========',
    '*****'
);
