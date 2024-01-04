const MarkovMachine = require("./markov");
let mm;
describe("markovMachine make chains method", function () {
  beforeEach(function () {
    let text = "to be or not to be";
    mm = new MarkovMachine(text);
  });
  test("methods are functions", function () {
    expect(typeof mm.makeChains).toBe("function");
  });
  test("makeChains()returns undefined when called", () => {
    let words = ["the", "cat", "in", "the", "hat"];
    expect(mm.makeChains(words)).toBeUndefined();
  });
});
describe("choice method", () => {
  test("should return a value from the input array ", () => {
    const inputArray = [1, 2, 3, 4];
    const result = MarkovMachine.choice(inputArray);
    expect(inputArray).toContain(result);
  });
});
describe("makeText method", function () {
  test("out of words length is same as result words lenth", () => {
    const input = "the cat in the hat";
    mm = new MarkovMachine(input);
    const numWords = 10;
    const result = mm.makeText(numWords);
    const resultWords = result.split(" ");
    expect(resultWords.length).toBe(numWords);
  });
});
