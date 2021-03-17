function multiplicator(element) {
    return 2 * element;
}

var arr = [2, 3, 4, 5].map(multiplicator);
console.log(arr);

Array.prototype.myMap = function (calbackFunction) {
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
        let result = calbackFunction(this[i]);
        newArray.push(result);
    }
    return newArray;
}

var arr2 = [2, 3, 4, 5].myMap(multiplicator);
console.log(arr2);