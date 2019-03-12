function common ( message ) {
    return new Promise (
        ( resolve, reject ) => {
            setTimeout (
                () => resolve ( message ),
                Math.random() * 8000
            )
        }
    )
}

function first () {
    return common ( "first" )
}

function second () {
    return common ( "second" )
}

function third () {
    return common ( "third" )
}

///-------------------------------------------------
// запуск параллельно

// Promise.all([
//     first(),
//     second(),
//     third()
// ])
//     .then(
//         response => console.log(response)
//     );

///-------------------------------------------------
// запуск последовательно ES6

// first()
//     .then(
//         response => {
//             console.log(response);
//             second()
//                 .then(
//                     response => {
//                         console.log(response);
//                         third()
//                             .then(
//                                response => console.log(response)
//                             )
//                     }
//                 )
//         }
//     );


///-------------------------------------------------
// Async function
// тоже последовательно

// async function sample() {
//     console.log(await first());
//     console.log(await second());
//     console.log(await third());
// }
//
// sample();



///-------------------------------------------------

function getColor() {
    return Math.round(Math.random() * 255)
}

function getRgb() {
    return `rgba(
            ${getColor()},
            ${getColor()},
            ${getColor()}
        )`
}

function createElem() {
    var elem = document.body.appendChild(document.createElement('div'));
    elem.style = `
        width: 50px;
        height: 50px;
        background-color: ${getRgb()};
    `
}

function buildElem() {
    return new Promise(
        function (resolve) {
            setTimeout( ()=> resolve(), 1000)
        }
    )
}

async function randomColor() {
    for(let i = 0; i < 100; i++) {
        await buildElem()
            .then(
                createElem
            )
    }
}

randomColor();

///-------------------------------------------------











































