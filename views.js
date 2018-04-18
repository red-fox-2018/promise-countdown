const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let menit_puluh = Math.floor(Math.floor(seconds / 60) / 10)
  let menit_satuan = (Math.floor(seconds / 60) % 10)
  let puluh = Math.floor((seconds % 60) / 10)
  let satuan = (seconds % 60) % 10
  let waktu = `${menit_puluh} ${menit_satuan} : ${puluh} ${satuan}`
  console.log(chalk.cyan(figlet.textSync(waktu)));
};

module.exports = { displayCountdown };
