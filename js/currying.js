//---------------------------------------
// TASK 1
//---------------------------------------

// Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(a, b) {
    return function b(b) {
        return a + b;
    };
    return a + b;
}

//---------------------------------------
// CURRING EXAMPLE
//---------------------------------------

// на выход принимает какую либо другую ф-цию
var curry = function (fn) { // 1) ПЕРЕДАЕМ Ф-ЦИЮ, КОТ. ХОТИМ КАРРИРОВАТЬ В CURRY
    var arity = fn.length; // 1.1) И СОХРАНЯЕМ В ЗАМЫКАНИИ ОБЩЕЕ КОЛ-ВО АРГУМЕНТОВ
    console.log('arity', arity);

    return function f1(...args) {  // 2) ВОЗВРАЩАЕМ НОВУЮ Ф-ЦИЮ F1
        console.log('f1 args', args);  // ... оператор возвращения всего (сейчас всех args)
        if (args.length >= arity) {  // проверка на достаточность аргументов   // 2.1) ПРИ ВЫЗОВЕ F1 СРАВНИВАЕМ ЕЁ АРГ. С ARITY
            console.log('enough arguments');
            // 2.2) ЕСЛИ АРГУМЕНТЫ F1 = ARITY
            // ВЫЗЫВАЕМ ИСХОДНУЮ Ф-ЦИЮ С ЭТИМИ АРГУМЕНТАМИ
            return fn(...args); // передаем add + spread конвертирует массив аргументов в аргументы (через запятую)
        } else {
            console.log('need more arguments');
            // если недостаточно аргументов -
            // возвращаем новую ф-цию
            // в которой тоже хотим получить аргументы

            // 2.3) ЕСЛИ АРГУМЕНТЫ F1 != ARITY И НЕ ПОЛУЧИЛИ ДОСТАТОЧНО АРГУМЕНТОВ
            // ВОЗВРЩ. F2, КОТ. ПОЛУЧАЕТ АРГУМЕНТЫ И КОНКАТИТ ИХ С ARGS, КОТ. ХРАНЯТСЯ В ЗАМЫКАНИИ
            // И ВЫЗЫВАЕТ F1  С НОВЫМИ АРГУМЕНТАМИ
            return function f2(...moreArgs) {
                console.log('f2', moreArgs);
                // args в замыкании, поэтому доступно внутри f2

                // для вызова ф-ции f1 с новыми аргументами
                var newArgs = args.concat(moreArgs);
                return f1(...newArgs); // тут создается новый массив
                // происхожит рекурсия ф-ции f1 пока не получим достаточно аргументов
            }
        }
    }
};

var add = function add(a, b, c) {
    return a + b + c;
};

// curriedAdd - ф-ция, которая каррирована
// получим ф-цию curriedAdd,когда вызовем curry на ф-цию add
var curriedAdd = curry(add);


// когда вызвали curriedAdd - var arity хранится в замыкании
var result = curriedAdd(1)(2)(3);
// можно и так вызвать
// var result = curriedAdd(1, 2, 3);

console.log('result', result);


//---------------------------------------

var curry = function (fn) {
    var arity  =  fn.length;
    return function f1(...args) {
        if (args.length >= arity) {
            // console.log('enough arguments');
            return fn(...args);
        } else {
            // console.log('need more arguments');
            return function f2(...moreArgs) {
                var newArgs = args.concat(moreArgs);
                return f1(...newArgs);
            }
        }
    }
};

var add = function add(a, b, c) {
    return a + b + c;
};

var curriedAdd = curry(add);

var result = curriedAdd(1)(2)(3);

console.log('result', result);
//---------------------------------------



//---------------------------------------
// TASK 2
//---------------------------------------

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

var curry = function (fn) {
    var arity = fn.length;
    return function f1(...args) {
        if (args.length >= arity) {
            return fn(...args);
        } else {
            return function f2(...moreArgs) {
                var newArgs = args.concat(moreArgs);
                return f1(...newArgs);
            }
        }
    }
};

var add = function add(a, b, c, d) {
    return a + b + c + d;
};

var sumCur = curry(add);
var sumComplex1 = sumCur(1)(2)(3);
var sumComplex2 = sumCur(5)(-1)(2);
var sumComplex3 = sumCur(6)(-1)(-2)(-3);