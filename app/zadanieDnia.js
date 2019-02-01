//Twój kod
const sleepSort = process.argv.slice(2);

sleepSort.forEach(function (n) {
  setTimeout(() => {
    console.log(n);
  }, parseInt(n) * 1000);
});
