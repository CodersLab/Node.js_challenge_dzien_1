var sum=0;
var count=0;

process.argv.forEach((val, index) => {
if(count>=2) {
sum+=parseInt(val);
}
  count++;
});
console.log(sum);


