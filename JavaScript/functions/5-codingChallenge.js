const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  answers: new Array(4).fill(0),
};

//Create a method called registerNewAnswer on the poll object.
//The method does two things:
// Dsiplay a prompt window for the user to input the number of the selected options.
function registerNewAnswer(firstTry = true) {
  //printing question and options
  if (firstTry === true) {
    console.log(this.question);
    for (option of this.options) {
      console.log(option);
    }
    console.log("(Write option number)");
  }
  //user input
  const userInput = Number(prompt(":"));
  //must check if between 0 and 3
  if (userInput >= 0 && userInput <= 3) {
    console.log("done! thank you for choosing an answer.");
    // based on the input number, update the answers array
    poll.answers[userInput]++;
    displayResults.call(this);
  } else {
    console.log("try again with one of the options number");
    return registerNewAnswer(false);
  }
}

function displayResults() {
  console.log("Results:");
  console.log(this.answers);
}

registerNewAnswer.call(poll);
