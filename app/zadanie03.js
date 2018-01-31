var sum = 0;
process.argv.forEach((val, index) => {
  if(index>1){
    sum += parseInt(val);
  }
});
console.log(sum);
