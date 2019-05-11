/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/

const clear = require('clear');
const figlet = require('figlet');
const chalk = require('chalk');

const displayCountdown = seconds => {
  clear();
  console.log(chalk.yellowBright.bgBlueBright.bold(figlet.textSync('C o u n t d o w n    A p p')));
  
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);

  if (seconds == 0) {
    console.log(chalk.gray.bold(figlet.textSync(`0${min}:0${sec}`)));
  } else if (seconds < 10) {
    console.log(chalk.redBright.bold(figlet.textSync(`0${min}:0${sec}`)));
  } else if (seconds < 60) {
      console.log(chalk.yellowBright.bold(figlet.textSync(`0${min}:${sec}`)));
  } else if (seconds >= 60) {
    if (sec < 10) {
      console.log(chalk.cyanBright.bold(figlet.textSync(`0${min}:0${sec}`)));
    } else if (min < 10) {
      console.log(chalk.cyanBright.bold(figlet.textSync(`0${min}:${sec}`)));
    }
  }
};

module.exports = {
  displayCountdown
};
