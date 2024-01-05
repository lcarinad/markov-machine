/** Command-line tool to generate Markov text. */

const fs = require("fs");
const axios = require("axios");
const MarkovMachine = require("./markov");

function readFile(filePath) {
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

async function readUrl(url) {
  try {
    let resp = await axios.get(url);
    let mm = new MarkovMachine(resp.data);
    console.log(mm.makeText(20));
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}
let filePath = process.argv[2];

if (!filePath.includes(".com")) {
  readFile(filePath);
} else {
  readUrl(filePath);
}
