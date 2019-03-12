var globalA = 10;
var globalB = 'globalB';
var globalUser = {
    name: 'Ivan',
    age: 25
};

function parentFunc() {
    var parentA = 7;
    var parentB = 'parentB';
    var parentUser = {
        name: 'Masha',
        age: 20
    };

    function childFunction() {
        var childA = 5;
        var childB = 'childA';
        var childUser = {
            name: 'Pasha',
            age: 22
        };

        document.write(parentA, globalB, globalUser);

        function babyFunction() {
            var babyA = 2;
            var babyB = 'babyA';
            var babyUser = {
                name: 'Baby',
                age: 2
            };

            document.write(childA, childB, childUser)
        }
        console.dir(babyFunction);
        babyFunction();
    }
    console.dir(childFunction);
    childFunction();
}

parentFunc();
console.dir(parentFunc);


