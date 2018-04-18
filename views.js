const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  
  minute = Math.floor(seconds / 60)
  second = seconds % 60

  minute = minute < 10 ? "0" + minute : '';
  second = second < 10 ? "0"+second : second;

  let timer = `${minute} : ${second}`
 
  console.log(chalk.blue(figlet.textSync(timer)));
};

module.exports = { displayCountdown };
