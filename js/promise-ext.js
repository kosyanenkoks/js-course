// var promise = new Promise(
//     (resolve, reject) => {
//         setTimeout(
//             () => Math.random() > 0.5 ?
//                 resolve('Success') :
//                 reject('Fail'), Math.random() * 5000
//         )
//     }
// );
//
// promise
//     .then(
//         response => console.log(response)
//     )
//     .catch(
//         error => console.log(error)
//     );



//-----------------------------------------------------

function getUrl(url) {
    return new Promise (
        (resolve, reject) => {
            var request = new XMLHttpRequest(); // объект запроса

            // соеднинение с сервером
            request.open('GET', url);

            request.onload = function(event) {
                resolve(this.responseText);
            };
            request.onerror = function (event) {
                reject(this.responseText);
            };

            request.send();
        }
    )
}

// ///////////////////////////////

getUrl('https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js')

.then(
    response => console.log(response)
)

.catch(
    error => console.log(error)
);


/////////////////////

// getUrl('https://httpbin.org/post')
//
// .then (
//     response => console.log(response)
// );


//-----------------------------------------------------
// GET на http://ptsv2.com/t/mf

function sendUrl(url) {
    return new Promise (
        (resolve, reject) => {
            var request = new XMLHttpRequest(); // объект запроса

            // соеднинение с сервером
            request.open('POST', url);

            request.setRequestHeader (
                "Content-Type",
                "application/x-www-form-urlencoded"
            )

            request.onload = function(event) {
                resolve(this.responseText);
            };
            request.onerror = function (event) {
                reject(this.responseText);
            };

            request.send("name=garevna&speciality=frontEnd");
        }
    )
}

sendUrl('http://ptsv2.com/t/mf/post')

    .then(
        response => console.log(response)
    )

    .catch(
        error => console.log(error)
    );


