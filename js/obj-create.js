// создать объект без прототипа

var emptyObject = Object.create ( null );

// второй способ
var obj = {};
obj.__proto__ = null;

// intanceof проверяет цепочку прототипов


