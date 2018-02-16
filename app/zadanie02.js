//Twój kod

const arr = ['Witam', 'się', 'z', 'programem', 'Node.js', 'w konsoli', 'i korzystam', 'z funkcji czasu!'];
let counter = 0;



const zadanie02 = setInterval(() => {
    console.log(arr[counter]);
    counter++;

if (counter === arr.length){
    clearInterval(zadanie02);
}

}, 1000);


