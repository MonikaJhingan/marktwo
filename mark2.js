var readlineSync = require("readline-sync");
var userName = readlineSync.question("Enter Your name ");
console.log("Welcome " + userName + " to Harry Potter Quiz");
console.log("__________________________________")
console.log("Let's Play the quiz!!!!!")
console.log("__________________________________")
console.log("                                       ")


var score = 0


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are right");
    score = score + 1;

  } else {
    console.log("You are wrong");
    score = score - 1;

  }
  console.log("Your Current Score is " + score);
  console.log("__________________________________")
  console.log("                               ")

}
var questions = [{
  question: "What was the first film of Harry Potter’s movie series ?                                   a-Harry Potter and the Half-Blood Prince     b-Harry Potter and the Philosopher's Stone ",
  answer: "b"
},
{
  question: "Who is the author of Harry Potter Series?    a-JK Rowling                                 b-Jane Austen",
  answer: "a"
},
{
  question: "What is Harry Potter’s Patronus?      a-Unicorn,                                         b-Stage ",
  answer: "b"
},
{
  question: "What is the real name of Hermione Granger?           a-Emma Watson                                    b-Emma Jane ",
  answer: "a"
}];
//loops

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
var finalScore = score
console.log("Your final score is out of 4 is ", finalScore)
console.log("Thank you for playing the game.")
console.log("__________________________________")
