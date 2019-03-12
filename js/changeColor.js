var colors = ['green', 'red', 'blue', 'orange'];

var newEl; // тут элемент

function changeColor(x){
    setTimeout(
        function() {
            newEl.style.color = x;
        }, Math.random()*2000
    );
}

colors.forEach(
    function(item) {
        var func = changeColor.bind(null, item);
        console.dir(func);
        func()
    }
);


//----------------------------------------------
// единоразово

var colors = ['green', 'red', 'blue', 'orange'];

var newEl = document.body

function changeColor(x){
    newEl.style.background = x;
}

colors.forEach(
    function(item) {
        var func = changeColor.bind(null, item);
        func()
    }
);

