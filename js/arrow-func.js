// контект изменить нельзя
// arguments нет
// такие ф-ции не всплывают

// for & if switch не вписываются в стрелочные ф-ции

// html <input>
// var inputText.oninput = event => console.log(this); // window

var func = () => {}; // name of function is func

var Constr = function () {
    this.usual = function () {
        console.log(this);
    };

    this.arrow = () => console.log(this);
};

var obj = new Constr();

obj.usual();
obj.arrow(); // контект не меняет через конструтор


var ConstArg = function () {
    this.usual = function () {
        console.log(arguments);
    };

    this.arrow = () => console.log(arguments);
};

var objArg = new ConstArg('Google');
var objArgMoz = new ConstArg('Mozila');

objArg.arrow(); // Google доступен
objArgMoz.usual();
