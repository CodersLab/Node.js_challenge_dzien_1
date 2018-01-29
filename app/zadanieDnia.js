//Twój kod
process.argv.filter(val => !isNaN(val)).forEach((i) => {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
});
