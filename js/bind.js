function sayHi() {
    console.log(this.name);
}

var user1 = {
    name: 'Buba',
    sayHi: sayHi
};

var user2 = {
    name: 'Buba_2',
    sayHi: sayHi
};

setTimeout(user2.sayHi.bind(user2), 1000); // Buba_2
setTimeout(user1.sayHi.bind(user1), 1000); // Buba




///////////////////////////////////////////////////////
// MDN EXAMPLE
///////////////////////////////////////////////////////

this.x = 9;
var module = {
    x: 81,
    getX: function() { return this.x; }
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, поскольку в этом случае this ссылается на глобальный объект

// создаём новую функцию с this, привязанным к module
var boundGetX = getX.bind(module);
boundGetX(); // 81


///////////////////////////////////////////////////////
// функции с предопределёнными аргументами (MDN)
///////////////////////////////////////////////////////

function list() {
    return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Создаём функцию с предустановленным ведущим аргументом
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]