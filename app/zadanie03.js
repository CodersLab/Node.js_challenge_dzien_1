//Twój kod

let sum = 0;
for (let i = 2; i<process.argv.length; i++){
    sum += parseInt(process.argv[i]);
};
console.log(sum);