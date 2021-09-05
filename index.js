const readlineSync = require("readline-sync");
const chalk = require("chalk");

console.log(chalk.green("Hi! Welcome to KnowMe Quiz. Let's check how well do you know me."));

let name;
let score=0;
const scoreBoard = [
  {
    Name: "Harshit",
    Score: 3
  },
  {
    Name: "Ayush",
    Score:2
  }
];


console.log("-----------------------------------------------");
console.log("Please use first letter in caps and give space in two words.");
console.log("------------------------------------------------");

startGame();

function startGame(){
  name = readlineSync.question("What is your name?");
  let ready = readlineSync.keyInYN("Read to play?");
  if(ready){
    play();
  }
  else return;
}

function play(){
  const questionSet = [
    {
      question: "What is my full name?",
      answer: "Harshit Anand"
    },
    {
      question:"Where is my hometown?",
      answer: "Patna"
    },
    {
      question:"Do I love coffee or chai?",
      answer: "Chai"
    },
    {
      question:"Do I love cricket or football?",
      answer: "Cricket"
    },
    {
      question:"Do I love mountains or beaches?",
      answer: "Mountains"
    },
    {
      question:"From which college I graduated?",
      answer: "Nit Durgapur"
    }
  ];

  questionSet.map(({question,answer})=>{
    askQuestion(question,answer);
  });

  gameOver();
}

function askQuestion(question,answer){
  console.log();
  console.log(chalk.yellow(question));
  let userAns = readlineSync.question("Answer:");

  if(userAns===answer){
    console.log(chalk.green("Correct Answer!"));
    score++;
  }
  else{
    console.log(chalk.red("Wrong Answer!"));
    score--;
  }
}

function gameOver(){
  console.log();
  console.log("-----------------------");
  console.log(chalk.cyan("Game is over!!!!"));
  console.log(`Your score is ${score} out of 5`);
  console.log();
  console.log("--------LeaderBoard--------");
  scoreBoard.push({Name: name,Score:score});
  console.table(scoreBoard);
}
