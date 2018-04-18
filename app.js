const { timer } = require("./controllers");

const main = () => {
  let seconds = parseInt(process.argv[2]) || 10;
  // Your code here...
  timer(seconds)
  .then(resolve =>{
    resolve()
  })
  .catch(reject => {
    console.log(reject);
  })
};

main();