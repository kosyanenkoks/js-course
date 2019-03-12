// -------------------------------
// radio button
// -------------------------------

// <input type="radio" name="group" value="first">
// <input type="radio" name="group" value="second">
// <input type="radio" name="group" value="third">

// onchange для радиокнопок не работает
// тут checked

for (var elem of Array.from(document.getElementsByName('group'))) {
    elem.onckick = function(event) {
        event.target.ckecked ? console.log(event.target.value) : null;
    }
}

// -------------------------------
// checkbox
// -------------------------------

var cars = ['BMV', 'Mazda', 'Volvo', 'Lada', 'Ford', 'AZLK'];

var result = [];

cars.forEach(
    function(item){
        var elem = document.body.appendChild(document.createElement('input'));
        elem.value = item;
        elem.type = 'checkbox';
        elem.onclick = function(event){
            var index = result.indexOf(event.target.value);
            event.target.checked ?
                (index < 0 ? result.push(event.target.value) : null) :
                index >= 0 ? result.splice(index,1) : null;
            console.log(result);
        }
    }
);

// -------------------------------
// input type color & number
// -------------------------------

// <input type="color">
// <input type="number">

var inputColor = document.querySelector("input[type = 'color']");
var inputNum = document.querySelector("input[type = 'number']");

inputColor.onchange = function (event) {
    document.body.style.backgroundColor = event.value;
};

inputNum.onchange = function (event) {
    console.log(event.target.value);
};


var inputText = document.querySelector("input[type = 'text']");

inputText.oninput = function (event) {
    console.log(event.target.value);
};

inputText.onchange = function (event) {
    document.body.innerHTML += `<p>${event.target.value}</p>`;
};
