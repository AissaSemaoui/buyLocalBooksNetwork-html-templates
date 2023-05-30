const fs = require("fs");
const path = require("path");

const compiledHtml = fs.readFileSync(
  path.join(__dirname, "./tracking-number-added-email.html"),
  "utf-8"
);

console.log(compiledHtml);

module.exports = compiledHtml;
