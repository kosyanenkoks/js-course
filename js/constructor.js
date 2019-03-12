var User = function (name,age) {
    this.name = name;
    this.age = age;
};

// new передаёт в качестве контекста новый пустой объект
// и возвращает его
// не нужен ретурн

var Ivan = new User('Ivan', 25);
var Masha = new User('Masha', 20);