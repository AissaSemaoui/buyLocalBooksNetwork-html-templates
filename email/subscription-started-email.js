const fs = require("fs");
const path = require("path");

const compiledHtml = fs.readFileSync(
  path.join(__dirname, "./subscription-started-email.html"),
  "utf-8"
);

module.exports = compiledHtml;
