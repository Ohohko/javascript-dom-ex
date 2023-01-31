// The following exercise contains the following subjects:
// ● prototype
// ● this
// Instructions
// 1. Build your own filter method with the help of prototypes
// 2. Build your own find method with the help of prototypes
// Extra
// 3. Build your own reduce method with the help of prototypes

Array.prototype.filter = function (callback){
    let elements = [];
    for (let element of this){
        if(callback(element)){
            elements.push(element);
        }
    } return elements;
}

function biggerThanOne(n){
    return n > 1;
}

console.log([1,2,3].filter(biggerThanOne));


Array.prototype.find = function (callback){
    for (let element of this){
        if(callback(element)){
            return element;
        }
}}

console.log([1, 2, 3].find(biggerThanOne))

function add(a, b){
    return a + b;
}

Array.prototype.reduce = function (callback, start = 0){
    let s = start;
    for (let element of this){
        s = callback(s, element);
    }
    return s;
}

console.log([1, 2, 3].reduce(add))
console.log([1, 2, 3].reduce(add, 5))