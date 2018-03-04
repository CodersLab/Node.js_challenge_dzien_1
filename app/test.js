// setTimeout(()=>{
//
//     console.log('Wygląda na to, że wszystko działa :)');
// },2000);


// const text = "Hello world";
//
// let counter = 0;
// const intervalId = setInterval(()=>{
//   console.log(text[counter]);
//   counter++;
//
//   if(counter === text.length){
//       clearInterval(intervalId);
//   }
// },400);

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});