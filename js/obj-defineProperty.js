var sample = {
    name:'figure',
    size: 100
};

Object.defineProperty(sample, 'hobby', {
    writable: false,
    enumerable: false,
    value: 'run'
});

Object.keys(sample); // не перечисляется

//-------------------------------------------