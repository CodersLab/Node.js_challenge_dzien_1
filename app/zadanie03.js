//Twój kod
let sum = 0;
process.argv.forEach((val, index) => {
  if(index !== 0 && index !==1) {
    sum += parseInt(val);
  }
});
console.log(sum)
