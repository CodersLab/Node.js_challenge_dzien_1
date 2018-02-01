console.log('Wygląda na to, że wszystko działa :)');

const text = 'Hello, World!';

let counter = 0;

const intervalId = setInterval(() => {
    console.log(text[counter]);
    counter++;

    if (counter === text.length){
        clearInterval(intervalId);
    }
}, 400);

process.argv.forEach((element,index) => {
  console.log(`${index}: ${element}`);
});
