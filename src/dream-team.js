const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;
    let str = members.filter(item => typeof(item) == 'string');
    let space = str.map(item => item.toUpperCase().trim().slice(0, 1));
    let order = space.sort().join('');
    return order;
}