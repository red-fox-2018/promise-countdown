const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  let mnt = Math.floor(seconds/60).toString();
  let dtk = (seconds%60).toString();

    if(mnt.length < 2){
      mnt = `0${mnt}`;
    }
    if(dtk.length < 2){
      dtk = `0${dtk}`;
    }

    console.log(chalk.cyan(figlet.textSync(`${mnt} : ${dtk}`)));
};

module.exports = { displayCountdown };
