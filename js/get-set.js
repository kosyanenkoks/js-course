var course = 28;

var commodity = {
    name: "Утюг",
    mark: "Tefal",
    priceUSD: 20,

    get priceUAH () {
        console.log('запрашиваем цену');
        return this.priceUSD * course
    },
    set priceUAH(newPriceUAH) {
        console.log('устанавливаем цену');
        this.priceUSD = newPriceUAH / course
    }
};

// SET commodity.priceUAH = 25 - так вызывать, не в круглых скобках