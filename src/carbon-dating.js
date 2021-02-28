const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof(sampleActivity) !== 'string') return false;
    if (isNaN(sampleActivity)) return false;
    if (sampleActivity > 15 || sampleActivity < 0) return false;
    let year = Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) / (Math.log(2) / HALF_LIFE_PERIOD));
    if (year === Infinity) return false;
    return year;
};