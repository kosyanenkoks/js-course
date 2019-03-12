var transport = new XMLHttpRequest();

transport.open('GET', 'https://api.github.com/users');
// transport.open('GET', 'https://httpbon.org/get');

// transport.onreadystatechange = function(event) {
//     this.readyState === 4 ?
//         this.status === 200 ?
//             console.log(JSON.parse(this.responseText)) : null : null;
// };
//
// transport.send();

transport.onload = function(event) {
    console.log(JSON.parse(this.responseText));
};

// transport.open();
transport.send();



