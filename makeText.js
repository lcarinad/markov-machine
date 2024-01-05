/** Command-line tool to generate Markov text. */

const fs = require("fs");
const MarkovMachine = require("./markov");
const filePath = process.argv[2];

function readFile(path) {
  fs.readFile(filePath, "utf-8", function (err, data) {
    if (err) {
      console.error("This error was received:", err);
      process.exit(1);
    }
    let text = data;
    let mm = new MarkovMachine(text);
    console.log(mm.makeText(20));
  });
}
//read file at url
readFile(filePath);

function readUrl(url) {
  const axios = require("axios");
}
