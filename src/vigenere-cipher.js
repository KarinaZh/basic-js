const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    encrypt(message, key) {
        if (message === undefined || key === undefine) throw new Error();
        let m = message.toUpperCase().split(' ').join('').split('').map(function(item) {
            switch (item) {
                case 'A':
                    return 0;
                    break;
                case 'B':
                    return 1;
                    break;
                case 'C':
                    return 2;
                    break;
                case 'D':
                    return 3;
                    break;
                case 'E':
                    return 4;
                    break;
                case 'F':
                    return 5;
                    break;
                case 'G':
                    return 6;
                    break;
                case 'H':
                    return 7;
                    break;
                case 'I':
                    return 8;
                    break;
                case 'J':
                    return 9;
                    break;
                case 'K':
                    return 10;
                    break;
                case 'L':
                    return 11;
                    break;
                case 'M':
                    return 12;
                    break;
                case 'N':
                    return 13;
                    break;
                case 'O':
                    return 14;
                    break;
                case 'P':
                    return 15;
                    break;
                case 'Q':
                    return 16;
                    break;
                case 'R':
                    return 17;
                    break;
                case 'S':
                    return 18;
                    break;
                case 'T':
                    return 19;
                    break;
                case 'U':
                    return 20;
                    break;
                case 'V':
                    return 21;
                    break;
                case 'W':
                    return 22;
                    break;
                case 'X':
                    return 23;
                    break;
                case 'Y':
                    return 24;
                    break;
                case 'Z':
                    return 25;
                    break;
                case '!':
                    return 26;
                    break;
            }
        });
        let k = key.toUpperCase().split(' ').join('').split('').map(function(item) {
            switch (item) {
                case 'A':
                    return 0;
                    break;
                case 'B':
                    return 1;
                    break;
                case 'C':
                    return 2;
                    break;
                case 'D':
                    return 3;
                    break;
                case 'E':
                    return 4;
                    break;
                case 'F':
                    return 5;
                    break;
                case 'G':
                    return 6;
                    break;
                case 'H':
                    return 7;
                    break;
                case 'I':
                    return 8;
                    break;
                case 'J':
                    return 9;
                    break;
                case 'K':
                    return 10;
                    break;
                case 'L':
                    return 11;
                    break;
                case 'M':
                    return 12;
                    break;
                case 'N':
                    return 13;
                    break;
                case 'O':
                    return 14;
                    break;
                case 'P':
                    return 15;
                    break;
                case 'Q':
                    return 16;
                    break;
                case 'R':
                    return 17;
                    break;
                case 'S':
                    return 18;
                    break;
                case 'T':
                    return 19;
                    break;
                case 'U':
                    return 20;
                    break;
                case 'V':
                    return 21;
                    break;
                case 'W':
                    return 22;
                    break;
                case 'X':
                    return 23;
                    break;
                case 'Y':
                    return 24;
                    break;
                case 'Z':
                    return 25;
                    break;
                case '!':
                    return 26;
                    break;
            }
        });
    }
    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefine) throw new Error();

    }
}

module.exports = VigenereCipheringMachine;