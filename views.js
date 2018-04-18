const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  var minute = Math.floor(seconds/60).toString();
  var second = (seconds%60).toString();
  if (minute.length < 2) {
    minute = `0${minute}`;
  }
  if (second.length < 2) {
    second = `0${second}`;
  }
  console.log(chalk.red(figlet.textSync(`${minute} : ${second}`)))
};

module.exports = { displayCountdown };
