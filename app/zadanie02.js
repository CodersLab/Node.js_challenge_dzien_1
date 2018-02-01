//Twój kod

console.log('Witam');

let textArray = ['się','z','programem','Node.js','w konsoli','i korzystam','z funkcji czasu!'];
let counter = 0;
let myInterval = setInterval(() => {
  console.log(`${textArray[counter]}`);
  counter++;
  if (counter == textArray.length-1){
    clearInterval(myInterval);
  }
},1000);
