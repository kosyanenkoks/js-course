// ---------------------------------------------
// FUNCTIONS
// ---------------------------------------------

function logger(str) {
    // В скобках это ПАРАМЕТР ф-ции - это то, что ф-ция ожидает
    // Ф-ция как локальная область видимости создает внутри себя
    // переменные, которые соответсвуют параметрам ф-ции

    debugger;
    arguments;
    // Псевдомассив arguments - содержит все аргументы переданные в ф-цию
    // Элементы arguments жестко связаны с соответсвующими
    // переменными в локальной области видимости - параметрами
    // Псевдомассив - есть численные ключи и .length
    console.log(arguments);

    function innerLogger() {
        console.log('inner', str);
    }
    innerLogger();
}

logger('Hello', 'Hello1', 'Hello2');
// АРГУМЕНТ ф-ции - то, что реально передано в ф-цию

function logger(str) {
    console.log(str);
    let rest = [];

    for (var i = 1; i < arguments.length; i++) {
        rest[i-1] = arguments[i];
    }

    // самовызывающаяся ф-ция ()()
    (function innerLogger(strings) {
        if (str.length > 1) {
            console.log('inner', strings);
        }
    })(rest)

    // function innerLogger(strings) {
    //     if (str.length > 1) {
    //         console.log('inner', strings);
    //     }
    // }
    // innerLogger(rest);
}

logger('Hello'); // Hello
logger('Hello', 'Hello1', 'Hello2'); // Hello --- 'inner' 'Hello1', 'Hello2'


// Аргумент по дефолту, чтобы не было пустых аргументов
function say ( x, y = 0, z = 0 ) { // ES6 тут можно задавать дефолтные значения
    x = x || 0; //default argument - старый метод
    console.log ( x + y + z )
}

var multiply = function (x = 0, y = 0) {
    return x * y * 10
};


// ---------------------------------------------
// Ф-ции, объявленные через function declaration видны сразу в начале документа
// ф-ции, объявленные через function expression - сначала underfined
// ---------------------------------------------



// ---------------------------------------------
// arguments
// ---------------------------------------------

var multiply = function n (x, y ) {
    console.log(arguments, x, y);
    arguments[0] = 3;
    x = 4;
    console.log(arguments, x, y);

    return x * y * 10;
};

// arguments жестко связан с переменными локальной области видимости,
// которые заданы в параметрах определены
// изменение одного влияет на другое
// ссылка идет на одно и тоже