console.log("Hai");

const fs = require('fs');

const readingFile = fs.readFileSync("./README.txt", "utf-8");

console.log(readingFile);

const os = require("os");

const readingLocation = os.homedir();

console.log(readingLocation);