var obj = {
    name: 'Vasya',
    age: 25
};

obj.key = Object.keys.bind(null, obj);
obj.key(obj);

obj.__proto__.speciality = 'Дворник';



