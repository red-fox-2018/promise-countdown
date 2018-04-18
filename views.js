const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  if(seconds<10){
    console.log(chalk.cyan(figlet.textSync(`00 : 0${seconds}`)))
  }
  else if(seconds<=59){
    console.log(chalk.cyan(figlet.textSync(`00 : ${seconds}`)))
  }
  else if(seconds>=59){
    if(Math.floor(seconds/60)<10){
      if(Math.floor(seconds%60)<10){
        console.log(chalk.cyan(figlet.textSync(`0${Math.floor(seconds/60)} : 0${Math.floor(seconds%60)}`)))
      }
      else {
        console.log(chalk.cyan(figlet.textSync(`0${Math.floor(seconds/60)} : ${Math.floor(seconds%60)}`)))
      }
    }
  }

};

module.exports = { 
  displayCountdown
};
