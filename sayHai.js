console.log("Hai");

const fs = require('fs');

const readingFile = fs.readFileSync("./README.txt", "utf-8");

console.log(readingFile);

const os = require("os");

const readingLocation = os.homedir();

console.log(readingLocation);

const calculator = require("./utils/calculator");

const tambahkan = calculator.addition(2,3);

const kurangkan = calculator.substrack(5,2);

console.log("2 + 3 = ",tambahkan);

console.log("5 - 2 = ",kurangkan);