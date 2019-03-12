var coffe = {
    shugar: 2,
    price: 1
};

function coffeWithMilk(coffe) {
    const res = {};
    for (let prop in coffe) {
        res[prop] = coffe[prop];
    }
    res.milk = true
    res.price = 1.5;
    return res;
}

var latte = coffeWithMilk(coffe);

// исходный объект не меняется
// новый объект расшширили