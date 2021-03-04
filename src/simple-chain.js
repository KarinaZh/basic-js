const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arr: [],
    getLength() {
        return this.arr.length;
    },
    addLink(value) {
        if (value == undefined) return this.arr.push('( )');
        this.arr.push(`( + ' '+ ${value} + ' ' + )`);
        return this;
    },
    removeLink(position) {

    },
    reverseChain() {
        this.arr.reverse();
        return this;
    },
    finishChain() {
        this.arr.join('~~');
        return this;
        this.arr.length = 0;
    }
};

module.exports = chainMaker;