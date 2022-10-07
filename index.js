const input = require("readline-sync");
let score = 0;

var questions = [
  {
    question: "Which festival is called 'Festival of Lights'?\n",
    answer: "Diwali"
  },
  {
    question: "Independence day is celebrated in which month?\n",
    answer: "August"
  },
  {
    question: "How many days are in a leap year?\n",
    answer: "366"
  },
  {
    question: "Capital of India is?\n",
    answer: "New Delhi"
  },
  {
    question: "Longest river of India is?\n",
    answer: "Ganga"
  },
  {
    question: "Which ocean is around India?\n",
    answer: "Indian Ocean"
  },
  {
    question: "The largest country in the world is?\n",
    answer: "Russia"
  },
  {
    question: "Which country was invaded by Russia in 2022?\n",
    answer: "Ukraine"
  },
  {
    question: "The largest inhabitated continent is?\n",
    answer: "Antarctica"
  },
  {
    question: "The national sports of India is?\n",
    answer: "Hockey"
  }
]

function quiz() {
  for (let i = 0; i < questions.length; i++) {
    var ans = input.question("Q" + (i + 1) + " " + questions[i].question);
    if (ans.toUpperCase() === questions[i].answer.toUpperCase()) {
      score += 1;
      console.log("\nCorrect answer!")
    }
    else console.log("\nWrong answer!\nThe correct answer is " + questions[i].answer);
    console.log("Your current score is " + score);
    console.log("\n*****************************************************\n");
  }
}
var name = input.question("What is your name?\n");
console.log("\nWelcome, " + name + "!\nLet's play a quiz\n");

quiz();

if (score > 5)
  console.log("You have won with a score of " + score);
else
  console.log("Alas! Try again next time!!!")