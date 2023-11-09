const {PI} = require('./mathBase');

function addFunc(a, b) {
    return a + b
}

function multiplyFunc(a, b) {
    return a * b
}

function circleArea(rad) {
    return PI * rad
}



module.exports = {
     addFunc,
     multiplyFunc,
     circleArea
}