const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let m = matrix.flat();
    let cat = m.filter(item => item == '^^');
    return cat.length;
}