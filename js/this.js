// ---------------------------------------------
// THIS
// ---------------------------------------------

// function showContext () {
//     console.log(this);
//     // console.log ( 'context: ', (context || this).name );
// }
//
// var o1 = {
//     name: 'first',
//     showObjectContext: showContext
// };
//
// var o2 = {
//     name: 'Second',
//     showObjectContext: showContext
// };
//
// var o3 = {
//     name: 'Third',
//     showObjectContext: o2.showObjectContext
// };
//
// var showContextCopy = o2.showObjectContext;


function showContext () {
    console.log(this.name);
}

var o2 = {
    name: 'Second',
    showObjectContext: showContext
};

var o1 = {
    name: 'first',
    showObjectContext: showContext,
};

var showO2ShowContext = o2.showObjectContext;

showO2ShowContext();

// this передастаться только в момент вызова