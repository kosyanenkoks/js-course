// Вывести селект
var cars = [
    {
        mark: 'BMV',
        model: '320'
    },
    {
        mark: 'BMV',
        model: '720'
    },
    {
        mark: 'Mazda',
        model: '6'
    },
    {
        mark: 'Lada',
        model: '2108'
    },
    {
        mark: 'AZLK',
        model: '412'
    },
    {
        mark: 'Volvo',
        model: '740'
    },
    {
        mark: 'AZLK',
        model: '4121'
    }
];

var menuItems = cars.reduce(
    function (result, item) {
        result.indexOf ( item.mark) < 0 ?
            result.push ( item.mark ) : null;
        return result;
    }, []
);

var select = document.body.appendChild(document.createElement('select'));

menuItems.forEach(
    function (elem) {
        var option = select.appendChild(document.createElement('option'));
        option.innerText = elem; // для представления
        option.value = elem; // .value - обязательно для работы onchange
    }
);

select.onchange = function (event) {
    var result = cars.filter(
        function (item) {
            return item.mark === event.target.value; // this показывает на window, поэтому event.target, но можно привязать контект через bind
        }
    );
    console.log(result);
};