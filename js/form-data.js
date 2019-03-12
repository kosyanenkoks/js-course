var inpFile = document.body.appendChild(document.createElement('input'))
inpFile.type = 'file'
inpFile.multiple = true

inpFile.onchange = function(event) {
    console.log(this.files)
}

//--------------------------------------------------------------

inpFile.onchange = function(event) {
    this.files[0].type === 'text/html' ?
        console.log(this.files) :
        console.warn('Incorrect type file')
}

//--------------------------------------------------------------


var formData = new FormData()
inpFile.onchange = function(event) {
    this.files[0].type === 'text/html' ?
        formData.append('myFile', this.files[0]) :
        console.warn('Incorrect type file')
}

formData.has('myFile');
formData.get('myFile');

//-----------------------------------------------------------------

var inpFile = document.body.appendChild(document.createElement('input'))
inpFile.type = 'file'
inpFile.multiple = true

var formData = new FormData()
inpFile.onchange = function(event) {
    this.files[0].type === 'text/javascript' ?
        formData.append('myFile', this.files[0]) :
        console.warn('Incorrect type file')

    fetch('http://ptsv2.com/t/mf/post', {
        method: 'POST',
        headers: {
            'Content-Type' : 'multipart/form-data'
        },
        body: formData
    })
    .then(
        response => response.json()
            .then(
                response => console.log(response)
            )
    )
}