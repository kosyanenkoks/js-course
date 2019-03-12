function sortArray(arr) {
    let result = [];
    let arrCopy = [...arr]; // скопировали массив, разбив на элементы

    arr.forEach( (element, index, arr)=> {
        let min = Math.min(...arr); // ... - разбить на элементы
        result.push(min);
        let minIndex = arrCopy.findIndex(e => e === min);
        arrCopy.splice(index, 1);

    });

    return result;
}