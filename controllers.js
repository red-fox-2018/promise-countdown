const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    function timeToStr(seconds) {
      let min = Math.floor(seconds/60);
      let sec = seconds % 60
      if (sec < 10) {
        sec = '0' + sec.toString()
      }
      let strTime = min + ' : ' + sec
      return strTime;
    }
    let secMin1 = timeToStr(seconds - 1)
    displayCountdown(secMin1);
    let interval = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      let strTime = timeToStr(secondsLeft)
      if (secondsLeft < 0) {
        clearInterval(interval);
        resolve()
      } else {
        displayCountdown(strTime);
      }
    }, 1000);
  });

module.exports = {
  timer
};
