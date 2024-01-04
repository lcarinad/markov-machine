/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains(this.words);
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains(words) {
    let obj = {};

    for (let i = 0; i < words.length - 1; i++) {
      let currentWord = words[i];
      let nextWord = words[i + 1];

      if (!obj[currentWord]) {
        obj[currentWord] = [];
      }
      obj[currentWord].push(nextWord);
      if (words[i] === words[words.length - 1]) {
        obj[currentWord].push(null);
      }
    }
    // let lastWord = words[words.length - 1];
    // obj[lastWord] = null;
    console.log(obj);
  }
  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}
let mm = new MarkovMachine("the cat in the hat");
console.log(mm);
