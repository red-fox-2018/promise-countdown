const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  var menit = Math.floor(seconds/60) + ''
  var detik = seconds%60 + ''

  if(menit.length < 2) {
    var min = `0${menit}`
  }

  if(detik.length < 2) {
    var sec = `0${detik}`
  } else {
    var sec = `${detik}`
  }

  var countdown = `${min}:${sec}`
  console.log(chalk.yellow(figlet.textSync(countdown)));
};

module.exports = { displayCountdown };
