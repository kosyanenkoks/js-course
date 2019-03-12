var funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(
        function () {
            setTimeout(
                () => console.log(i)
            , 1000)
        }
    )
}

funcs[4](); // 10


//-------------------------------------------

for (let i = 0; i < 10; i++) {
    funcs.push(
        function () {
            setTimeout(
                () => console.log(i)
            , 1000)
        }
    )
}

funcs[4](); // 4

//--------------------------------------------

var test1 = 10;
{
    test1 = 5;
    let test2 = 3;
    var test3 = 7;
}
console.log(test1); // 5
console.log(test3); // 7
console.log(test2); // ReferenceError


//--------------------------------------------

var crocodile = 12;
let mozilla = 50;
window.crocodile;
window.mozilla; // не попадает в объект виндоу