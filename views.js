const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();

  let detik = seconds % 60 + 1
  let menit = Math.floor(seconds / 60)


  if (menit > 0 && detik == 0) {
    menit -= 1
    detik = 60
  }

  if (detik == 0 && menit == 0) {

  } else {

    detik--

    if (detik < 10) {
      if (menit < 10) {
        seconds = `0${menit}:0${detik}`
      } else {
        seconds =`${menit}:0${detik}`
      }
    } else {
      if (menit < 10) {
        seconds =`0${menit}:${detik}`
      } else {
        seconds =`${menit}:${detik}`
      }
    }

  }

  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.red(figlet.textSync(seconds)))

};

module.exports = { displayCountdown };
