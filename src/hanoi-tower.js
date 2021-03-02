const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    function pow(x, y) {
        if (y == 1) {
            return x;
        } else {
            return x * pow(x, y - 1);
        }
    }
    let turns = (pow(2, disksNumber)) - 1;
    let seconds = Math.floor(3600 / (turnsSpeed / turns));
    let obj = {
        turns: turns,
        seconds: seconds
    };
    return obj;
};