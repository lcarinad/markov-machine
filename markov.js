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
    let chainsObj = {};

    for (let i = 0; i <= words.length - 1; i++) {
      let currentWord = words[i];
      let nextWord = words[i + 1];

      if (!chainsObj[currentWord]) {
        chainsObj[currentWord] = [];
      }
      chainsObj[currentWord].push(nextWord || null);
    }
    this.chainsObj = chainsObj;
  }
  /** return random text from chains */
  static choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  makeText(numWords = 20) {
    let keys = Object.keys(this.chainsObj);
    let key = MarkovMachine.choice(keys);
    let ranOutput = [];
    while (ranOutput.length < numWords && key !== null) {
      ranOutput.push(key);
      key = MarkovMachine.choice(keys);
    }
    return ranOutput.join(" ");
  }
}
let mm = new MarkovMachine("the cat");
console.log(mm.makeText());
