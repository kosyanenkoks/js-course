var props = [
    ['name','Ivan'],
    ['age', 25],
    ['hobby', 'football']
];

var user = {};

props.forEach(
    elem => user[elem[0]] = elem[1]
);
