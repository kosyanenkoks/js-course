// ---------------------------------------------
// FOR
// ---------------------------------------------

// ---------------------------------------------
// 1. Continue
// ---------------------------------------------

const group = ['Vasya', undefined, '', null, 'Masha', 1, 'Karina', '', 'Vova', 3];
var i; //for performance
for (i = 0; i < group.length; i++) {
    if(!(group[i] && group[i].length)) continue;
        console.log(group[i].length, group[i]);
}

// ---------------------------------------------
// Строки менять нельзя в отличии от массива
// ---------------------------------------------

// ---------------------------------------------
// 2. Break
// ---------------------------------------------

const group = ['Vasya', undefined, '', null, NaN, 'Masha', 1, 'Karina', '', 'Vova', 3];
var i;
for (i = 0; i < group.length; i++) {
    if((group[i] && group[i].length))
    console.log(group[i].length, group[i])
    else if (isNaN(group[i])) break;
}

// ---------------------------------------------
// isNaN - проверка по тому,что
// NaN === NaN = false
// ---------------------------------------------
