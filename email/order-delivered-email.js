const fs = require("fs");
const path = require("path");

const compiledHtml = fs.readFileSync(
  path.join(__dirname, "./order-delivered-email.html"),
  "utf-8"
);

module.exports = compiledHtml;
