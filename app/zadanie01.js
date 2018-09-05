console.log('Krzysztof Urbaniak');
let counter = 0;
 const intervalId = setInterval(() => {
     console.log('wita sie z Node.js!'[counter]);
     counter++;

     if (counter === 'wita sie z Node.js!'.length){
         clearInterval(intervalId);
 }
}, 5000);
