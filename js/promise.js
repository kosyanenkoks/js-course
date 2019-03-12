// console.log('start');
//
// var promise = new Promise(
//     function(resolve, reject) {
//         resolve('Promise resolved'); // выведется последним
//     }
// );
//
// // это call back resolve
// promise.then(
//     function (response) {
//         console.log(response);
// });
//
// console.log('end');



//--------------------------------------------------

// console.log('start');
//
// // таймер не ждет завершения, будет после undefined
// // undefined - это завершение приложения
//
// setTimeout(
//     function () {
//         console.log('Time is over'); // выведется последним
//     }, 0
// );
//
// var promise2 = new Promise(
//     function(resolve, reject) {
//         resolve('Promise resolved'); // выведется предпоследним
//     }
// );
//
// // это call back resolve
// promise2.then(
//     function (response) {
//         console.log(response);
//     });
//
// console.log('end');


//------------------------------------------

// var promise3 = new Promise(
//     function (resolve, reject) {
//         Math.random() < 0.5 ?
//             resolve('Good') :
//             reject('Fail');
//     }
// );
//
// promise3
//     .then(
//         response => console.log(response)
//     )
//     .catch(
//         error => console.log(error)
//     );

//------------------------------------------

var promise4 = new Promise(
    function (resolve, reject) {
        setTimeout(
            function () {
                Math.random() < 0.5 ?
                    resolve('Good') :
                    reject('Fail');
            }, Math.random() * 10000
        )
    }
);

promise4
    .then(
        response => console.log(response)
    )
    .catch(
        error => console.log(error)
    );
