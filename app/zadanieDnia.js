process.argv.forEach((val, index) => {
  if(index>1){
    setTimeout(() => {
      console.log(val);
    },parseInt(val) * 1000);
 }
});
