/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/


const {
   displayCountdown
} = require("./views");

const timer = seconds =>
   new Promise((resolve, reject) => {
      let myTime = setInterval(() => {

         displayCountdown(seconds);
         seconds--;
         if (seconds < 0) {
            clearInterval(myTime);
            resolve();
         }
      }, 1000);
   });

module.exports = {
   timer
};
