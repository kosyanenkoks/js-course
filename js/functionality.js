// замыкание

var say = (function first() {
   var grit = 'Hello' ;
   return function second() {
       console.log(grit);
   }
})();

say();

// -------------------------------------------

// счётчик

var counter = (function () {
    var num = 0;
    return function () {
        return num++;
    }
})();

// -------------------------------------------

console.log('hi');

setTimeout(
    function () {
        console.log('timeout');
}, 1000);

console.log('bye');