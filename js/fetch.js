fetch('https://api.github.com/users')
    .then(response => response.json()
        .then(console.log(response))
    );

// -----------------------------------------------------
console.dir(ReadableStream);
// getReader() - если не знаешь ответ -
// можно получить подходящего ридера и прочитать
// -----------------------------------------------------

//------------------------------------------------------
// Mode
fetch('http://ptsv2.com/t/mf/d/190001/json',
    {
        mode: 'same-origin'
    })
    .then(response => response.json()
        .then(console.log(response))
    );
//------------------------------------------------------

// Methods

fetch('http://ptsv2.com/t/mf/post',
    {
        mode: 'no-cors',
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify([{
            name: 'Vova',
            age: 25
        }])
    })
    .then(response => console.log(response));

//------------------------------------------------------
