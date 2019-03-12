// обнулить обрабочик если он задан через 'ON'

// event.target[`on${event.type}`] = null;

// ----------------------------------------

// перебор Объекта

var obj = {
    name: 'Ann',
    age: 25,
    city: 'Kharjov',
};

function test(sample) {
    for(var prop in sample) {
        console.log(`prop: ${sample[prop]}`)
    }
}

// ----------------------------------------
// dispatchEvent

document.body.onclick = function (event) {
    event.target.style.backgroundColor = 'yellow';
};

document.body.dispatchEvent(new Event('click'));


function sayHellow() {
   document.body.style.backgroundColor = 'green';
}

document.body.dispatchEvent(new Event('croco'));

document.body.addEventListener('croco', sayHellow);


// ----------------------------------------




