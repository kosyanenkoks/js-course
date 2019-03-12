var elem = document.createElement('p');
elem.innerText = 'qwerty';

document.body.appendChild(elem);

var obj = {
    name: 'Google',
    say: function () {
        console.log('Hello')
    }
};

// for(var prop in elem){
//     prop.indexOf('on') === 0 ? console.log(prop) : null;
// }

// ВСЕГДА передавать параметр event
elem.onmouseover = function (event) {
    console.log(this.name);
    this.say();
    // console.log(this, event.target, event.eventPhase, event.clientX, event.clientY);
}.bind(obj); // поменяли контекст
