const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  var menit = Math.floor(seconds / 60);
  var detik = seconds % 60;
  if (menit < 10) {
    if (detik < 10) {
      console.log(chalk.cyan(figlet.textSync(`0${menit}:0${detik}`)));
    } else {
      console.log(chalk.cyan(figlet.textSync(`0${menit}:${detik}`)));
    }
  } else {
    if (detik < 10) {
      console.log(chalk.cyan(figlet.textSync(`${menit}:0${detik}`)));
    } else {
      console.log(chalk.cyan(figlet.textSync(`${menit}:${detik}`)));
    }
  }
};

module.exports = { displayCountdown };
