const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:  C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);

    //poll.registerNewAnswer();

    // Based on the input number, update the 'answers' array property. For
    // example, if the option is 3, increase the value at position 3 of the array by
    // 1. Make sure to check if the input is a number and if the number makes
    // sense (e.g. answer 52 wouldn't make sense, right?)

    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`poll results are ${this.answers.join(", ")}`);
    }
  },
};

//Call this method whenever the user clicks the "Answer poll" button.

document
  .querySelector(".button")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

//   Create a method 'displayResults' which displays the poll results. The
//   method takes a string as an input (called 'type'), which can be either 'string'
//   or 'array'. If type is 'array', simply display the results array as it is, using
//   console.log(). This should be the default option. If type is 'string', display a
//   string like "Poll results are 13, 2, 4, 1".

// Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
poll.displayResults.call({ answer: [5, 2, 3] }, "string");
