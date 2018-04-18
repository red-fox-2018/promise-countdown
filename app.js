const { timer } = require("./controllers");
const { close } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  timer(seconds)
  .then(()=>{
    // console.log("Mulai!!!")
    close()
  });
};

main();
